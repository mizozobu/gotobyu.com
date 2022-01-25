import { jest } from '@jest/globals';
import type { SpyInstance } from 'jest-mock';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import type { Node } from 'unist';
import { __MDX_CONTENT, __INDEXABLE_OBJECTS } from './algolia.fixture';
import type { HeadingDepth } from './algolia.interface';
import {
  Algoliast,
  getText,
  remarkAlgolia,
  toIndexableObjects,
  indexMdx,
} from './algolia.util';

describe('Algoliast', () => {
  let algoliast: Algoliast;

  beforeEach(() => {
    algoliast = new Algoliast();
  });

  describe('constructor', () => {
    it('should instantiate', () => {
      expect.assertions(1);

      expect(algoliast.serialize()).toStrictEqual({
        permalink: '',
        h1: '',
        h2: '',
        h3: '',
        h4: '',
        h5: '',
        h6: '',
        content: '',
      });
    });
  });

  describe('resetHeadings', () => {
    const heading1 = 'heading 1';
    const heading2 = 'heading 2';
    const heading3 = 'heading 3';
    const heading4 = 'heading 4';
    const heading5 = 'heading 5';
    const heading6 = 'heading 6';

    beforeEach(() => {
      algoliast.setHeading(1, heading1);
      algoliast.setHeading(2, heading2);
      algoliast.setHeading(3, heading3);
      algoliast.setHeading(4, heading4);
      algoliast.setHeading(5, heading5);
      algoliast.setHeading(6, heading6);
    });

    it('should reset h1 ~ h6', () => {
      expect.assertions(1);

      algoliast.resetHeadings(1);

      expect(algoliast.serialize()).toStrictEqual(
        expect.objectContaining({
          h1: '',
          h2: '',
          h3: '',
          h4: '',
          h5: '',
          h6: '',
        }),
      );
    });

    it('should reset h3 ~ h6', () => {
      expect.assertions(1);

      algoliast.resetHeadings(3);

      expect(algoliast.serialize()).toStrictEqual(
        expect.objectContaining({
          h1: heading1,
          h2: heading2,
          h3: '',
          h4: '',
          h5: '',
          h6: '',
        }),
      );
    });

    it('should reset h6', () => {
      expect.assertions(1);

      algoliast.resetHeadings(6);

      expect(algoliast.serialize()).toStrictEqual(
        expect.objectContaining({
          h1: heading1,
          h2: heading2,
          h3: heading3,
          h4: heading4,
          h5: heading5,
          h6: '',
        }),
      );
    });
  });

  describe('setHeading', () => {
    let __resetHeadings: SpyInstance<void, [HeadingDepth]>;

    beforeEach(() => {
      __resetHeadings = jest.spyOn(algoliast, 'resetHeadings');
    });

    it('should set h1 and set permalink as h1', () => {
      expect.assertions(2);

      const heading1 = 'heading 1';
      algoliast.setHeading(1, 'heading 1');

      // see https://github.com/facebook/jest/issues/7929
      // eslint-disable-next-line jest/prefer-strict-equal
      expect(__resetHeadings.mock.calls).toEqual([[1]]);
      expect(algoliast.serialize()).toStrictEqual({
        permalink: `#${heading1}`,
        h1: heading1,
        h2: '',
        h3: '',
        h4: '',
        h5: '',
        h6: '',
        content: '',
      });
    });

    it('should set h1, h2, h3 and set permalink as h3', () => {
      expect.assertions(2);

      const heading1 = 'heading 1';
      const heading2 = 'heading 2';
      const heading3 = 'heading 3';
      algoliast.setHeading(1, heading1);
      algoliast.setHeading(2, heading2);
      algoliast.setHeading(3, heading3);

      // see https://github.com/facebook/jest/issues/7929
      // eslint-disable-next-line jest/prefer-strict-equal
      expect(__resetHeadings.mock.calls).toEqual([[1], [2], [3]]);
      expect(algoliast.serialize()).toStrictEqual({
        permalink: `#${heading3}`,
        h1: heading1,
        h2: heading2,
        h3: heading3,
        h4: '',
        h5: '',
        h6: '',
        content: '',
      });
    });
  });

  describe('setContent', () => {
    it('should set content', () => {
      expect.assertions(1);

      const content = 'content';
      algoliast.setContent(content);

      expect(algoliast.serialize()).toStrictEqual(
        expect.objectContaining({
          content,
        }),
      );
    });
  });

  describe('serialize', () => {
    it('should serialize to indexable data', () => {
      expect.assertions(1);

      const heading1 = 'heading 1';
      const heading2 = 'heading 2';
      const heading3 = 'heading 3';
      const heading4 = 'heading 4';
      const heading5 = 'heading 5';
      const heading6 = 'heading 6';
      algoliast.setHeading(1, heading1);
      algoliast.setHeading(2, heading2);
      algoliast.setHeading(3, heading3);
      algoliast.setHeading(4, heading4);
      algoliast.setHeading(5, heading5);
      algoliast.setHeading(6, heading6);

      expect(algoliast.serialize()).toStrictEqual({
        permalink: `#${heading6}`,
        h1: heading1,
        h2: heading2,
        h3: heading3,
        h4: heading4,
        h5: heading5,
        h6: heading6,
        content: '',
      });
    });
  });
});

describe('getText', () => {
  it('should return recursively merged text from tree', () => {
    expect.assertions(1);

    const text = getText({
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'a',
        },
        {
          type: 'inlineCode',
          value: 'b',
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: 'c',
            },
            {
              type: 'inlineCode',
              value: 'd',
            },
          ],
        },
      ],
    });

    expect(text).toBe('abcd');
  });
});

describe('remarkAlgolia', () => {
  it('should compile mdx to indexable objects', async () => {
    expect.assertions(1);

    const { result } = await unified()
      .use(remarkParse)
      .use(remarkMdx)
      .use(remarkAlgolia)
      .data('settings', { filter: (node: Node) => node.name !== 'NoIndex' })
      .process(Buffer.from(__MDX_CONTENT));

    expect(result).toStrictEqual(__INDEXABLE_OBJECTS);
  });
});

describe('toIndexableObjects', () => {
  it('should return indexable objects', async () => {
    expect.assertions(1);

    const indexableObjects = await toIndexableObjects(
      __MDX_CONTENT,
      (node: Node) => node.name !== 'NoIndex',
    );

    expect(indexableObjects).toStrictEqual(__INDEXABLE_OBJECTS);
  });
});

describe('indexMdx', () => {
  it.todo('should call readFile and toIndexableObjects');
});
