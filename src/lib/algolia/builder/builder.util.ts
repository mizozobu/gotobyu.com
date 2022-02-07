import { resolve } from 'path';
import type { Element, Text } from 'hast';
import rehypeParse from 'rehype-parse';
import { unified, Compiler, Processor } from 'unified';
import type { Node } from 'unist';
import { visit } from 'unist-util-visit';
import type { VFileCompatible } from 'vfile';
import { HEADING_TAGS, PAGE_BASE_PATH } from './builder.constants';
import type {
  HeadingDepth,
  HeadingTag,
  Algoliast,
  Settings,
} from './builder.interface';

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
    const { exclude = () => false, baseUrl } = that.data(
      'settings',
    ) as Settings;
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
        builder.setContent(content);

        const currentAlgoliast = builder.getCurrentAlgoliast();
        const lastAlgoliast = builder.getLastAlgoliast();

        if (
          lastAlgoliast !== undefined &&
          isInSameBlock(currentAlgoliast, lastAlgoliast)
        ) {
          lastAlgoliast.content += content;
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
