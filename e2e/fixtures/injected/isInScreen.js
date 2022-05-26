/**
 * Returns the closest scrollable parent
 * @param node Node
 * @returns Closest scrollable parent
 * @type {(node: Element) => boolean}
 * @see {@link https://stackoverflow.com/a/35940276/8636650}
 */
// eslint-disable-next-line no-unused-vars
const getScrollParent = (node) => {
  if (
    node.scrollHeight > node.clientHeight ||
    node.scrollWidth > node.clientWidth
  ) {
    return node;
  }
  return getScrollParent(node.parentNode);
};

/**
 * Returns if the given element is in in screen relative to its scroll container
 * @param elem Element
 * @returns Whether the element is in in screen relative to its scroll container
 * @type {(elem: Element) => Promise<boolean>}
 * @see {@link https://stackoverflow.com/a/45618188/8636650}
 */
// eslint-disable-next-line no-unused-vars
const isInScreen = (elem) =>
  new Promise((resolve) => {
    const onIntersection = (entries) => {
      entries.forEach((entry) => {
        resolve(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(onIntersection, {
      root: getScrollParent(elem),
    });

    observer.observe(elem);
  });

/**
 * Filter array with async closure
 * @param array Array
 * @param callback Filter closure
 * @returns Filtered array
 * @type {<T>(elem: T[], callback: ((value: T, index: number, array: T[]) => Promise<boolean>)) => Promise<T[]>}
 * @see {@link https://stackoverflow.com/a/53508547/8636650}
 */
// eslint-disable-next-line no-unused-vars
const filterAsync = async (array, callback) => {
  const filterMap = await Promise.all(array.map(callback));
  return array.filter((_, index) => filterMap[index]);
};
