import type { Element } from 'hast';
import { visit } from 'unist-util-visit';

/**
 * Recursively extract text value from tree and remove new line characters
 * @param tree Hast tree
 * @returns Merged texts
 */
export const getText = (tree: Element): string => {
  let value = '';
  visit(tree, 'text', (node) => {
    value += node.value;
  });
  return value.replace(/(\r\n|\r|\n)/g, '');
};
