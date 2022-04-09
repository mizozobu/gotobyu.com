/**
 * Returns if the given text node is visible
 * @param node Text node
 * @returns Whether the node is vislble
 * @type {(node: Text) => boolean)}
 * @see {@link https://github.com/microsoft/playwright/blob/cdb68448e15f848ebb3f31834c2431e7bd8b681b/packages/playwright-core/src/server/injected/selectorEvaluator.ts#L701-L707}
 */
// eslint-disable-next-line no-unused-vars
const isVisibleTextNode = (node) => {
  // https://stackoverflow.com/questions/1461059/is-there-an-equivalent-to-getboundingclientrect-for-text-nodes
  const range = document.createRange();
  range.selectNode(node);
  const rect = range.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
};

/**
 * Returns if the given element is visible
 * @param element Element
 * @returns Whether the element is vislble
 * @type {(node: Element) => boolean)}
 * @see {@link https://github.com/microsoft/playwright/blob/cdb68448e15f848ebb3f31834c2431e7bd8b681b/packages/playwright-core/src/server/injected/selectorEvaluator.ts#L680-L699}
 */
// eslint-disable-next-line no-unused-vars
const isVisible = (element) => {
  // Note: this logic should be similar to waitForDisplayedAtStablePosition() to avoid surprises.
  if (!element.ownerDocument || !element.ownerDocument.defaultView) return true;
  const style = element.ownerDocument.defaultView.getComputedStyle(element);
  if (!style || style.visibility === 'hidden') return false;
  if (style.display === 'contents') {
    // display:contents is not rendered itself, but its child nodes are.
    for (let child = element.firstChild; child; child = child.nextSibling) {
      if (child.nodeType === 1 /* Node.ELEMENT_NODE */ && isVisible(child))
        return true;
      if (child.nodeType === 3 /* Node.TEXT_NODE */ && isVisibleTextNode(child))
        return true;
    }
    return false;
  }
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
};
