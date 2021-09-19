/**
 * Transform DOM
 *
 * e.g.
 *
 * ```
 * ## heading
 *
 * mdx contents
 * ```
 *
 * ```
 * <section ...>
 *  <h2 ...>heading</h2>
 *   <div ...>
 *     mdx contents
 *   </div>
 * </section>
 * ```
 */
const sectionize = () => (tree) => {
  let isOpening = false;
  const isH2 = ({ type, depth }) => type === 'heading' && depth === 2;

  Object.assign(tree, {
    children: tree.children.flatMap((node, i) => {
      if (isH2(node)) {
        const { value: id } = node.children[0];

        // close and open in the middle
        if (isOpening) {
          return [
            { type: 'jsx', value: `</div>` },
            { type: 'jsx', value: '</Section>' },
            { type: 'jsx', value: `<Section id='${id}'>` },
            node,
            {
              type: 'jsx',
              value: "<div className='px-0 md:px-6 lg:px-12 space-y-4'>",
            },
          ];
        }

        // open at the beginning
        isOpening = true;
        return [
          { type: 'jsx', value: `<Section id='${id}'>` },
          node,
          {
            type: 'jsx',
            value: "<div className='px-0 md:px-6 lg:px-12 space-y-4'>",
          },
          ...(i === tree.children.length - 1
            ? [
                { type: 'jsx', value: '</div>' },
                { type: 'jsx', value: '</Section>' },
              ]
            : []),
        ];
      }

      // close at the end
      if (i === tree.children.length - 1 && isOpening) {
        isOpening = false;
        return [
          node,
          { type: 'jsx', value: `</div>` },
          { type: 'jsx', value: '</Section>' },
        ];
      }

      return [node];
    }),
  });
};

module.exports = sectionize;
