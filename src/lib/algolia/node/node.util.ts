import type { MultipleBatchRequest, Hit } from '@algolia/client-search';
import algoliasearch from 'algoliasearch';
import axios from 'axios';
import type { Element, Text } from 'hast';
import rehypeParse from 'rehype-parse';
import { unified, type Compiler, type Processor } from 'unified';
import type { Node } from 'unist';
import { visit } from 'unist-util-visit';
import type { VFileCompatible } from 'vfile';
import {
  BATCH_ACTION,
  HEADING_TAGS,
  type Algoliast,
  type HeadingDepth,
  type HeadingTag,
  type Settings,
  type Compare,
} from '@l/algolia';
import { getEnvVar } from '@l/env';

/**
 * Check equality of {@link Algoliast}
 * @param a {@link Algoliast} to compare
 * @param b {@link Algoliast} to compare
 * @returns Whether algoliast1 is equal to algoliast2
 */
export const algoliastEqual: Compare<Algoliast> = (a, b) =>
  a.h1 === b.h1 &&
  a.h2 === b.h2 &&
  a.h3 === b.h3 &&
  a.h4 === b.h4 &&
  a.h5 === b.h5 &&
  a.h6 === b.h6;

/**
 * Check whether to skip operation
 * @param a {@link Algoliast}
 * @param b {@link Algoliast}
 * @returns Whether to skip mapping to operation(no operation required)
 */
export const algoliastSkip: Compare<Algoliast> = (a, b) =>
  a.content === b.content;

/**
 * Map search hit objects and new records to addObject, updateObject, and deleteObject operations.
 * Do the same thing as "replaceAllObjects", but in a better way.
 * @see {@link https://www.algolia.com/doc/api-reference/api-methods/batch/}
 * @param _objectsfromAlgolia list of objects returned from algolia
 * @param _newObjects list of objects to replace the current index
 * @returns algolia custom batch operations supplied to "multipleBatch"
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
 * Build {@link Algoliast} from hast tree
 */
export class AlgoliastBuilder {
  /** Heading max depth */
  private readonly MAX_DEPTH: number = 6;
  /** Array of {@link Algoliast} */
  private algoliasts: Algoliast[] = [];
  /** Current {@link Algoliast} */
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
   * @constructor
   * @param baseUrl Base url for permalink
   * e.g. https://example.com
   */
  constructor(private readonly baseUrl: string) {
    this.current._tags = [baseUrl];
  }

  /**
   * Reset headings below the specified depth
   * @param tag heading tag name
   */
  resetHeadings(tag: HeadingTag): void {
    const depth = +tag.slice(-1) as HeadingDepth;
    for (let i = depth; i <= this.MAX_DEPTH; i += 1) {
      this.current[`h${i}`] = '';
    }
  }

  /**
   * Set heading at the specified depth
   * @param tag Heading tag name
   * @param value Heading title
   */
  setHeading(tag: HeadingTag, value: string): void {
    this.resetHeadings(tag);
    this.current.permalink = `${this.baseUrl}#${value}`;
    this.current[tag] = value;
  }

  /**
   * Set content
   * @param content Content body
   */
  setContent(content: string): void {
    this.current.content = content;
  }

  /**
   * Add {@link Algoliast}
   */
  add(algoliast: Algoliast): void {
    this.algoliasts.push(algoliast);
  }

  /**
   * Getter for algoliasts
   * @returns Array of {@link Algoliast}
   */
  getAlgoliasts(): Algoliast[] {
    return this.algoliasts;
  }

  /**
   * Get current {@link Algoliast}
   * @returns Current {@link Algoliast}
   */
  getCurrentAlgoliast(): Algoliast {
    return { ...this.current };
  }

  /**
   * Get last {@link Algoliast}
   * @returns Last {@link Algoliast}
   */
  getLastAlgoliast(): Algoliast | undefined {
    return this.algoliasts[this.algoliasts.length - 1];
  }
}

/**
 * Recursively extract text value from tree and remove new line characters
 * @param tree Hast tree
 * @returns Merged texts
 */
export const getText = (tree: Node): string => {
  let value = '';
  visit(tree, 'text', (node) => {
    value += (node as Text).value;
  });
  return value.replace(/(\r\n|\r|\n)/g, '');
};

/**
 * Check if algoliast is under the same heading
 * @param algoliast1 {@link Algoliast} to compare
 * @param algoliast2 {@link Algoliast} to compare
 * @returns Whether the two {@link Algoliast Algoliasts} are under the same heading
 */
export const isInSameBlock = (
  algoliast1: Algoliast,
  algoliast2: Algoliast,
): boolean =>
  algoliast1.h1 === algoliast2.h1 &&
  algoliast1.h2 === algoliast2.h2 &&
  algoliast1.h3 === algoliast2.h3 &&
  algoliast1.h4 === algoliast2.h4 &&
  algoliast1.h5 === algoliast2.h5 &&
  algoliast1.h6 === algoliast2.h6;

/**
 * Compile hast to an array of {@link Algoliast Algoliasts}
 */
export function rehypeAlgolia(): void {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const that = this as Processor;
  const compiler: Compiler = (tree) => {
    const {
      baseUrl,
      endingChar = '',
      exclude = (): boolean => false,
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
        ({ type, value }: Node) =>
          type === 'text' && /\S/.test(value as string),
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
 * Covert HTML to an array of {@link Algoliast Algoliasts}
 * @param html HTML file content
 * @param settings {@link Settings}
 * @returns Array of {@link Algoliast Algoliasts}
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
 * Parse HTML file and index in algolia
 * @param path Realative path from process.env.NEXT_PUBLIC_BASE_URL
 */
export const indexDocument = async (path: string): Promise<void> => {
  const NEXT_PUBLIC_ALGOLIA_APP_ID = getEnvVar('NEXT_PUBLIC_ALGOLIA_APP_ID');
  const NEXT_PUBLIC_ALGOLIA_INDEX_NAME = getEnvVar(
    'NEXT_PUBLIC_ALGOLIA_INDEX_NAME',
  );
  const ALGOLIA_ADMIN_API_KEY = getEnvVar('ALGOLIA_ADMIN_API_KEY');
  const NEXT_PUBLIC_BASE_URL = getEnvVar('NEXT_PUBLIC_BASE_URL');

  /** HTML document to be indexed */
  const { data: html } = await axios.get<string>(
    new URL(path, NEXT_PUBLIC_BASE_URL).href,
  );

  /** new algoliasts to be indexed */
  const newAlgoliasts = await toAlgoliasts(html, {
    baseUrl: path,
    endingChar: '。',
    exclude: (node: Element) => node.properties?.dataNoindex === 'true',
  });

  /** algolia admin client */
  const algoliaClient = algoliasearch(
    NEXT_PUBLIC_ALGOLIA_APP_ID,
    ALGOLIA_ADMIN_API_KEY,
  );
  const { results } = await algoliaClient.search<Algoliast>([
    {
      indexName: NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
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
    NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
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
