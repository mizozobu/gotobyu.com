import { readFile } from 'fs/promises';
import type { Heading, Text } from 'mdast';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import { unified, Compiler } from 'unified';
import type { Node } from 'unist';
import { filter } from 'unist-util-filter';
import { visit } from 'unist-util-visit';
import type { VFileCompatible } from 'vfile';
import type { HeadingDepth, IndexableObject } from './algolia.interface';

/**
 * mdast to algolia indexable object
 */
export class Algoliast {
  /** link to the content */
  private permalink = '';
  /** h1 heading */
  private h1 = '';
  /** h2 heading */
  private h2 = '';
  /** h3 heading */
  private h3 = '';
  /** h4 heading */
  private h4 = '';
  /** h5 heading */
  private h5 = '';
  /** h6 heading */
  private h6 = '';
  /** content body */
  private content = '';

  /** heading max depth */
  private readonly MAX_DEPTH: number = 6;

  /**
   * Algoliast constructor
   *
   * @param baseUrl base url for permalink
   * e.g. https://example.com
   */
  constructor(private readonly baseUrl: string = '') {}

  /**
   * reset headings below the specified depth
   *
   * @param depth heading depth
   */
  resetHeadings(depth: HeadingDepth) {
    for (let i = depth; i <= this.MAX_DEPTH; i += 1) {
      this[`h${i}`] = '';
    }
  }

  /**
   * set heading at the specified depth
   *
   * @param depth heading depth
   * @param value heading title
   */
  setHeading(depth: HeadingDepth, value: string) {
    this.resetHeadings(depth);
    this.permalink = `${this.baseUrl}#${value}`;
    this[`h${depth}`] = value;
  }

  /**
   * set content
   *
   * @param content content body
   */
  setContent(content: string) {
    this.content = content;
  }

  /**
   * serialize to algolia indexable object
   *
   * @returns algolia indexable object
   */
  serialize(): IndexableObject {
    return {
      permalink: this.permalink,
      h1: this.h1,
      h2: this.h2,
      h3: this.h3,
      h4: this.h4,
      h5: this.h5,
      h6: this.h6,
      content: this.content,
    };
  }
}

/**
 * recursively extract text and inlineCode value from tree
 *
 * @param tree
 * @returns merged texts
 */
export const getText = (tree: Node): string => {
  let value = '';
  visit(tree, ['text', 'inlineCode'], (node) => {
    value += (node as Text).value;
  });
  return value.replace(/\n/g, '');
};

/**
 * compile mdast to indexable objects
 */
/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-this-alias */
export function remarkAlgolia() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const that = this;
  const compiler: Compiler = (tree) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const { filter: filterFn } = that.data('settings') as {
      filter: (node: Node) => boolean;
    };

    const builder = new Algoliast();
    const indexableObjects: IndexableObject[] = [];

    const filteredTree = filter(tree, filterFn);
    visit(filteredTree, ['heading', 'paragraph'], (topLevelNode) => {
      if (topLevelNode.type === 'heading') {
        const heading = getText(topLevelNode);
        builder.setHeading((topLevelNode as unknown as Heading).depth, heading);
      } else if (topLevelNode.type === 'paragraph') {
        const paragraph = getText(topLevelNode);
        builder.setContent(paragraph);

        indexableObjects.push(builder.serialize());
      }
    });

    return indexableObjects;
  };

  Object.assign(that, { Compiler: compiler });
}
/* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-this-alias */

/**
 * covert mdx to indexable objects
 *
 * @param mdx mdx file content
 * @param filterFn filter tree
 * @returns indexable objects
 */
export const toIndexableObjects = async (
  mdx: VFileCompatible,
  filterFn: (node: Node) => boolean,
): Promise<IndexableObject[]> => {
  const { result } = (await unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkAlgolia)
    .data('settings', { filter: filterFn })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .process(mdx)) as unknown as { result: IndexableObject[] };

  return result;
};

/**
 * index parse mdx file and index in algolia
 *
 * @param mdxFilePath path to mdx file
 * e.g. module.filename
 */
export const indexMdx = async (mdxFilePath: string) => {
  const exlucdes = ['NoIndex'];

  const mdx = await readFile(mdxFilePath);
  const indexableObjects = await toIndexableObjects(
    mdx,
    (node: Node) => !exlucdes.includes(node.name as string), // FIXME
  );

  // TODO: send index
};
