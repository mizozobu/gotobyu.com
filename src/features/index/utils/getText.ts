import type { Text } from 'hast';
import type { Node } from 'unist';
import { visit } from 'unist-util-visit';

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
