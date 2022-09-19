import type { Element } from 'hast';
import { type Processor } from 'unified';
import type { Node } from 'unist';
import visit from 'unist-util-visit';
import { type Algoliast, type HeadingTag } from '@/features/search';
import { type Settings } from '../types';
import { AlgoliastBuilder } from './AlgoliastBuilder';
import { getText } from './getText';
import { isInSameBlock } from './isInSameBlock';

/**
 * Array of possible heading tags
 */
const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

/**
 * Compile hast to an array of {@link Algoliast Algoliasts}
 */
export function rehypeAlgolia(): void {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const that = this as Processor;
  const compiler = (tree: Node): Algoliast[] => {
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
