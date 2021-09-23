const map = require('unist-util-map');

/**
 * Transform internal link to a different component
 */
const transformInternalLink = () => (tree) => {
  const transformded = map(tree, (node) => {
    // see https://github.com/sindresorhus/is-absolute-url/blob/main/index.js#L3
    if (node.type === 'link' && !/^[a-zA-Z][a-zA-Z\d+\-.]*?:/.test(node.url)) {
      const t = node.title || node.children[0].value;
      return {
        type: 'jsx',
        value: `<InternalLink href='${node.url}'>${t}</InternalLink>`,
      };
    }

    return node;
  });

  transformded.children.unshift({
    type: 'import',
    value: "import { InternalLink } from '@c/atoms/InternalLink';",
  });

  Object.assign(tree, transformded);
};

module.exports = transformInternalLink;
