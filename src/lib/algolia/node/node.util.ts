import { resolve } from 'path';
import type { MultipleBatchRequest, Hit } from '@algolia/client-search';
import algoliasearch from 'algoliasearch';
import type { Element, Text } from 'hast';
import rehypeParse from 'rehype-parse';
import { unified, Compiler, Processor } from 'unified';
import type { Node } from 'unist';
import { visit } from 'unist-util-visit';
import type { VFileCompatible } from 'vfile';
import {
  BATCH_ACTION,
  HEADING_TAGS,
  PAGE_BASE_PATH,
  HeadingDepth,
  HeadingTag,
  Algoliast,
  Settings,
  Compare,
} from '@l/algolia';

/**
 * resolve path to absolute path to html file
 *
 * @param path realative path to html file from /pages
 * @returns absolute path to html file
 */
export const resolvePathToHtmlFile = (path: string): string => {
  const relativePath = path.startsWith('/') ? path.substring(1) : path;
  const absPath = resolve(PAGE_BASE_PATH, `${relativePath}.html`);

  return absPath;
};

/**
 * check equality of algoliast
 *
 * @param a algoliast1
 * @param b algoliast2
 * @returns whether algoliast1 is equal to algoliast2
 */
export const algoliastEqual: Compare<Algoliast> = (a, b) =>
  a.h1 === b.h1 &&
  a.h2 === b.h2 &&
  a.h3 === b.h3 &&
  a.h4 === b.h4 &&
  a.h5 === b.h5 &&
  a.h6 === b.h6;

/**
 * check whether to skip operation
 *
 * @param a algoliast1
 * @param b algoliast2
 * @returns whether to skip mapping to operation(no operation required)
 */
export const algoliastSkip: Compare<Algoliast> = (a, b) =>
  a.content === b.content;

/**
 * map search hit objects and new records to addObject, updateObject, and deleteObject operations.
 * do the same thing as "replaceAllObjects", but in a better way.
 *
 * @param objectsfromAlgolia list of objects returned from algolia
 * @param newObjects list of objects to replace the current index
 * @returns algolia custom batch operations supplied to "multipleBatch"
 * @see https://www.algolia.com/doc/api-reference/api-methods/batch/
 */
export const mapToOperations = <T>(
  indexName: string,
  _objectsfromAlgolia: Hit<T>[],
  _newObjects: T[],
  equal: Compare<T>,
  skip: Compare<T>,
): {
  addObjectOperations: MultipleBatchRequest[];
  updateObjectOperations: MultipleBatchRequest[];
  deleteObjectOperations: MultipleBatchRequest[];
} => {
  // copy to avoid mutating original array
  const objectsfromAlgolia = [..._objectsfromAlgolia];
  const newObjects = [..._newObjects];

  const addObjectOperations = [];
  const updateObjectOperations = [];

  for (let i = 0; i < newObjects.length; i += 1) {
    const newObj = newObjects[i];
    let existsInAlgolia = false;
    for (let j = 0; j < objectsfromAlgolia.length; j += 1) {
      const algoliaObj = objectsfromAlgolia[j];
      if (equal(newObj, algoliaObj)) {
        existsInAlgolia = true;
        if (!skip(newObj, algoliaObj)) {
          updateObjectOperations.push({
            indexName,
            action: BATCH_ACTION.update,
            body: {
              ...algoliaObj,
              ...newObj,
            },
          });
        }
        // remove item to shrink array size for later iteration
        objectsfromAlgolia.splice(j, 1);
        j -= 1;
        break;
      }
    }

    if (!existsInAlgolia) {
      addObjectOperations.push({
        indexName,
        action: BATCH_ACTION.add,
        body: newObj,
      });
    }
  }

  const deleteObjectOperations = objectsfromAlgolia.map(({ objectID }) => ({
    indexName,
    action: BATCH_ACTION.delete,
    body: {
      objectID,
    },
  }));

  return {
    addObjectOperations,
    updateObjectOperations,
    deleteObjectOperations,
  };
};

/**
 * build algolist from hast tree
 */
export class AlgoliastBuilder {
  /** heading max depth */
  private readonly MAX_DEPTH: number = 6;
  /** algoliasts */
  private algoliasts: Algoliast[] = [];
  /** current algoliast */
  private current: Algoliast = {
    permalink: '',
    h1: '',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    content: '',
    _tags: [],
  };

  /**
   * Algoliast constructor
   *
   * @param baseUrl base url for permalink
   * e.g. https://example.com
   */
  constructor(private readonly baseUrl: string) {
    this.current._tags = [baseUrl];
  }

  /**
   * reset headings below the specified depth
   *
   * @param tag heading tag name
   */
  resetHeadings(tag: HeadingTag) {
    const depth = +tag.slice(-1) as HeadingDepth;
    for (let i = depth; i <= this.MAX_DEPTH; i += 1) {
      this.current[`h${i}`] = '';
    }
  }

  /**
   * set heading at the specified depth
   *
   * @param tag heading tag name
   * @param value heading title
   */
  setHeading(tag: HeadingTag, value: string) {
    this.resetHeadings(tag);
    this.current.permalink = `${this.baseUrl}#${value}`;
    this.current[tag] = value;
  }

  /**
   * set content
   *
   * @param content content body
   */
  setContent(content: string) {
    this.current.content = content;
  }

  /**
   * add algoliast
   */
  add(algoliast: Algoliast) {
    this.algoliasts.push(algoliast);
  }

  /**
   * getter for algoliasts
   *
   * @returns array of algoliast
   */
  getAlgoliasts(): Algoliast[] {
    return this.algoliasts;
  }

  /**
   * get current algoliast
   *
   * @returns current algoliast
   */
  getCurrentAlgoliast(): Algoliast {
    return { ...this.current };
  }

  /**
   * get last algoliast
   *
   * @returns last algoliast
   */
  getLastAlgoliast(): Algoliast | undefined {
    return this.algoliasts[this.algoliasts.length - 1];
  }
}

/**
 * recursively extract text value from tree and remove new line characters
 *
 * @param tree hast tree
 * @returns merged texts
 */
export const getText = (tree: Node): string => {
  let value = '';
  visit(tree, 'text', (node) => {
    value += (node as Text).value;
  });
  return value.replace(/(\r\n|\r|\n)/g, '');
};

/**
 * check if algoliast is under the same heading
 *
 * @param algoliast1 algoliast to compare
 * @param algoliast2 algoliast to compare
 * @returns whether algoliast is under the same heading
 */
export const isInSameBlock = (algoliast1: Algoliast, algoliast2: Algoliast) =>
  algoliast1.h1 === algoliast2.h1 &&
  algoliast1.h2 === algoliast2.h2 &&
  algoliast1.h3 === algoliast2.h3 &&
  algoliast1.h4 === algoliast2.h4 &&
  algoliast1.h5 === algoliast2.h5 &&
  algoliast1.h6 === algoliast2.h6;

/**
 * compile hast to algoliast
 */
export function rehypeAlgolia() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const that = this as Processor;
  const compiler: Compiler = (tree) => {
    const {
      baseUrl,
      endingChar = '',
      exclude = () => false,
    } = that.data('settings') as Settings;
    const builder = new AlgoliastBuilder(baseUrl);

    visit(tree, 'element', (node: Element) => {
      if (['head', 'script'].includes(node.tagName) || exclude(node)) {
        // eslint-disable-next-line no-param-reassign
        node.children = [];
        return;
      }

      /** whether its children including text node. whitespace only text nodes are excluded. */
      const includesTextNode = node.children.some(
        (n: Node) => n.type === 'text',
      );

      if ((HEADING_TAGS as readonly string[]).includes(node.tagName)) {
        const heading = getText(node);
        builder.setHeading(node.tagName as HeadingTag, heading);
      } else {
        // do nothing if its children has no text node
        if (!includesTextNode) return;

        const content = getText(node);
        const contentWithEndingChar =
          content.slice(-1) === endingChar
            ? content
            : `${content}${endingChar}`;
        builder.setContent(contentWithEndingChar);

        const currentAlgoliast = builder.getCurrentAlgoliast();
        const lastAlgoliast = builder.getLastAlgoliast();

        if (
          lastAlgoliast !== undefined &&
          isInSameBlock(currentAlgoliast, lastAlgoliast)
        ) {
          lastAlgoliast.content += contentWithEndingChar;
        } else {
          builder.add(currentAlgoliast);
        }
      }

      // since getText recursively extract texts, remove child nodes to avoid duplicates
      // eslint-disable-next-line no-param-reassign
      node.children = [];
    });

    return builder.getAlgoliasts();
  };

  Object.assign(that, { Compiler: compiler });
}

/**
 * covert html to array of algoliast
 *
 * @param html html file content
 * @param exclude filter tree
 * @returns array of algoliast
 */
export const toAlgoliasts = async (
  html: VFileCompatible,
  settings: Settings,
): Promise<Algoliast[]> => {
  const { result } = await unified()
    .use(rehypeParse)
    .use(rehypeAlgolia)
    .data('settings', settings)
    .process(html);

  return result as Algoliast[];
};

/* eslint-disable no-console */
/**
 * parse html file and index in algolia
 *
 * @param path realative path from process.env.NEXT_PUBLIC_BASE_URL
 */
export const indexDocument = async (path: string): Promise<void> => {
  if (process.env.ALGOLIA_BUILD_INDEX !== 'true') {
    return console.log(
      `\x1b[33mwarn\x1b[0m  - Skip indexing since "ALGOLIA_BUILD_INDEX" is not set to "true" (${path})`,
    );
  }
  if (process.env.NEXT_PUBLIC_ALGOLIA_APP_ID === undefined)
    throw new Error(
      'environment variable "NEXT_PUBLIC_ALGOLIA_APP_ID" must be defined',
    );
  if (process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME === undefined)
    throw new Error(
      'environment variable "NEXT_PUBLIC_ALGOLIA_INDEX_NAME" must be defined',
    );
  if (process.env.ALGOLIA_ADMIN_API_KEY === undefined)
    throw new Error(
      'environment variable "ALGOLIA_ADMIN_API_KEY" must be defined',
    );
  if (process.env.NEXT_PUBLIC_BASE_URL === undefined)
    throw new Error(
      'environment variable "NEXT_PUBLIC_BASE_URL" must be defined',
    );

  /** html document to be indexed */
  const html = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`).then(
    (res) => res.text(),
  );

  /** new algoliasts to be indexed */
  const newAlgoliasts = await toAlgoliasts(html, {
    baseUrl: path,
    endingChar: '。',
    exclude: (node: Element) => node.properties?.dataNoindex === 'true',
  });

  /** algolia admin client */
  const algoliaClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.ALGOLIA_ADMIN_API_KEY,
  );
  const { results } = await algoliaClient.search<Algoliast>([
    {
      indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
      query: '',
      params: {
        tagFilters: [path],
      },
    },
  ]);
  const existingAlgoliasts = results[0].hits; // FIXME
  const {
    addObjectOperations,
    updateObjectOperations,
    deleteObjectOperations,
  } = mapToOperations(
    process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
    existingAlgoliasts,
    newAlgoliasts,
    algoliastEqual,
    algoliastSkip,
  );
  const { objectIDs } = await algoliaClient
    .multipleBatch([
      ...addObjectOperations,
      ...updateObjectOperations,
      ...deleteObjectOperations,
    ])
    .wait();

  console.log(`\x1b[35mevent\x1b[0m - Finished indexing ${path}`);
  console.log(
    `\x1b[36minfo\x1b[0m  - Affected ${objectIDs.length} records (${addObjectOperations.length} added, ${updateObjectOperations.length} updated, ${deleteObjectOperations.length} deleted).`,
  );

  return Promise.resolve();
};
/* eslint-enable no-console */
