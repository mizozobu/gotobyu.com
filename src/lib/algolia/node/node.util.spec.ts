import type { SpyInstance } from 'jest-mock';
import rehypeParse from 'rehype-parse';
import unified from 'unified';
import type { Algoliast, HeadingTag, Settings } from '@l/algolia';
import { __HTML_CONTENT, __ALGOLIASTS } from '@l/algolia/algolia.fixture';
import {
  algoliastEqual,
  algoliastSkip,
  mapToOperations,
  AlgoliastBuilder,
  getText,
  isInSameBlock,
  rehypeAlgolia,
  toAlgoliasts,
} from './node.util';

describe('algoliastEqual', () => {
  it('should return true when all headings are equal', () => {
    expect.assertions(1);

    const obj1: Algoliast = {
      permalink: 'https://example.com/obj1',
      h1: 'heading 1',
      h2: 'heading 2',
      h3: 'heading 3',
      h4: 'heading 4',
      h5: 'heading 5',
      h6: 'heading 6',
      content: 'obj1',
      _tags: ['https://example.com'],
    };
    const obj2: Algoliast = {
      permalink: 'https://example.com/obj2',
      h1: 'heading 1',
      h2: 'heading 2',
      h3: 'heading 3',
      h4: 'heading 4',
      h5: 'heading 5',
      h6: 'heading 6',
      content: 'obj2',
      _tags: ['https://example.com'],
    };

    expect(algoliastEqual(obj1, obj2)).toBe(true);
  });

  it('should return false when at least one heading is not equal', () => {
    expect.assertions(1);

    const obj1: Algoliast = {
      permalink: 'https://example.com/obj1',
      h1: 'heading 1',
      h2: 'heading 2',
      h3: 'heading 3',
      h4: 'heading 4',
      h5: 'heading 5',
      h6: 'heading 6',
      content: 'obj1',
      _tags: ['https://example.com'],
    };
    const obj2: Algoliast = {
      permalink: 'https://example.com/obj2',
      h1: 'heading 1',
      h2: 'heading 2',
      h3: 'heading 3',
      h4: 'heading 4',
      h5: 'heading 5',
      h6: '',
      content: 'obj2',
      _tags: ['https://example.com'],
    };

    expect(algoliastEqual(obj1, obj2)).toBe(false);
  });
});

describe('algoliastSkip', () => {
  it('should return html without whitespace node', () => {
    expect.assertions(1);

    const obj1: Algoliast = {
      permalink: 'https://example.com/obj1',
      h1: 'heading 1',
      h2: 'heading 2',
      h3: 'heading 3',
      h4: 'heading 4',
      h5: 'heading 5',
      h6: 'heading 6',
      content: 'obj1',
      _tags: ['https://example.com'],
    };
    const obj2: Algoliast = {
      permalink: 'https://example.com/obj2',
      h1: 'heading 1',
      h2: 'heading 2',
      h3: 'heading 3',
      h4: 'heading 4',
      h5: 'heading 5',
      h6: '',
      content: 'obj2',
      _tags: ['https://example.com'],
    };

    expect(algoliastSkip(obj1, obj2)).toBe(false);
  });
});

describe('mapToOperations', () => {
  const indexName = 'index';
  const obj1 = {
    objectID: 'objectID1',
    a: 'a1',
    content: 'this is objectID 1',
  };
  const obj2 = {
    objectID: 'objectID2',
    a: 'a2',
    content: 'this is objectID 2',
  };
  const obj3 = {
    objectID: 'objectID3',
    a: 'a3',
    content: 'this is objectID 3',
  };
  const equal = (
    a: { a: string; content: string },
    b: { a: string; content: string },
  ): boolean => a.a === b.a;
  const skip = (
    a: { a: string; content: string },
    b: { a: string; content: string },
  ): boolean => a.content === b.content;

  it('should map to an addObject operation when the object exists only in algolia', () => {
    expect.assertions(1);

    const newObj = {
      a: 'a4',
      content: 'this is objectID 4',
    };

    const operations = mapToOperations(
      indexName,
      [obj1, obj2, obj3],
      [obj1, obj2, obj3, newObj],
      equal,
      skip,
    );

    expect(operations).toStrictEqual({
      addObjectOperations: [
        {
          action: 'addObject',
          indexName,
          body: newObj,
        },
      ],
      updateObjectOperations: [],
      deleteObjectOperations: [],
    });
  });

  it('should map to an updateObject operation when the object exists both in algolia and local', () => {
    expect.assertions(1);

    const updatedObj1 = {
      a: 'a1',
      content: 'this is updated objectID 1',
    };

    const operations = mapToOperations(
      indexName,
      [obj1, obj2, obj3],
      [updatedObj1, obj2, obj3],
      equal,
      skip,
    );

    expect(operations).toStrictEqual({
      addObjectOperations: [],
      updateObjectOperations: [
        {
          action: 'updateObject',
          indexName,
          body: {
            objectID: obj1.objectID,
            ...updatedObj1,
          },
        },
      ],
      deleteObjectOperations: [],
    });
  });

  it('should map to a deleteObject operation when the object does not exist in local', () => {
    expect.assertions(1);

    const operations = mapToOperations(
      indexName,
      [obj1, obj2, obj3],
      [obj1, obj2],
      equal,
      skip,
    );

    expect(operations).toStrictEqual({
      addObjectOperations: [],
      updateObjectOperations: [],
      deleteObjectOperations: [
        {
          action: 'deleteObject',
          indexName,
          body: {
            objectID: obj3.objectID,
          },
        },
      ],
    });
  });

  it('should map to multiple kinds of operations', () => {
    expect.assertions(1);

    const newObj = {
      a: 'a4',
      content: 'this is objectID 4',
    };
    const updatedObj1 = {
      a: 'a1',
      content: 'this is updated objectID 1',
    };

    const operations = mapToOperations(
      indexName,
      [obj1, obj2, obj3],
      [updatedObj1, newObj],
      equal,
      skip,
    );

    expect(operations).toStrictEqual({
      addObjectOperations: [
        {
          action: 'addObject',
          indexName,
          body: newObj,
        },
      ],
      updateObjectOperations: [
        {
          action: 'updateObject',
          indexName,
          body: {
            objectID: obj1.objectID,
            ...updatedObj1,
          },
        },
      ],
      deleteObjectOperations: [
        {
          action: 'deleteObject',
          indexName,
          body: {
            objectID: obj2.objectID,
          },
        },
        {
          action: 'deleteObject',
          indexName,
          body: {
            objectID: obj3.objectID,
          },
        },
      ],
    });
  });
});

describe('AlgoliastBuilder', () => {
  const baseUrl = 'https://example.com';
  let builder: AlgoliastBuilder;

  beforeEach(() => {
    builder = new AlgoliastBuilder(baseUrl);
  });

  describe('constructor', () => {
    it('should instantiate with each property in this.current as empty string', () => {
      expect.assertions(1);

      expect(builder['current']).toStrictEqual({
        permalink: '',
        h1: '',
        h2: '',
        h3: '',
        h4: '',
        h5: '',
        h6: '',
        content: '',
        _tags: [baseUrl],
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
      builder.setHeading('h1', heading1);
      builder.setHeading('h2', heading2);
      builder.setHeading('h3', heading3);
      builder.setHeading('h4', heading4);
      builder.setHeading('h5', heading5);
      builder.setHeading('h6', heading6);
    });

    it('should reset h1 ~ h6', () => {
      expect.assertions(1);

      builder['resetHeadings']('h1');

      expect(builder['current']).toStrictEqual(
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

      builder['resetHeadings']('h3');

      expect(builder['current']).toStrictEqual(
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

      builder['resetHeadings']('h6');

      expect(builder['current']).toStrictEqual(
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
    let __resetHeadings: SpyInstance<void, [HeadingTag]>;

    beforeEach(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      __resetHeadings = jest.spyOn(builder, 'resetHeadings');
    });

    it('should set h1 and set permalink as h1', () => {
      expect.assertions(2);

      const heading1 = 'heading 1';
      builder.setHeading('h1', 'heading 1');

      // see https://github.com/facebook/jest/issues/7929
      // eslint-disable-next-line jest/prefer-strict-equal
      expect(__resetHeadings.mock.calls).toEqual([['h1']]);
      expect(builder['current']).toStrictEqual({
        permalink: `${baseUrl}#${heading1}`,
        h1: heading1,
        h2: '',
        h3: '',
        h4: '',
        h5: '',
        h6: '',
        content: '',
        _tags: [baseUrl],
      });
    });

    it('should set h1, h2, h3 and set permalink as h3', () => {
      expect.assertions(2);

      const heading1 = 'heading 1';
      const heading2 = 'heading 2';
      const heading3 = 'heading 3';
      builder.setHeading('h1', heading1);
      builder.setHeading('h2', heading2);
      builder.setHeading('h3', heading3);

      // see https://github.com/facebook/jest/issues/7929
      // eslint-disable-next-line jest/prefer-strict-equal
      expect(__resetHeadings.mock.calls).toEqual([['h1'], ['h2'], ['h3']]);
      expect(builder['current']).toStrictEqual({
        permalink: `${baseUrl}#${heading3}`,
        h1: heading1,
        h2: heading2,
        h3: heading3,
        h4: '',
        h5: '',
        h6: '',
        content: '',
        _tags: [baseUrl],
      });
    });
  });

  describe('setContent', () => {
    it('should set this.content', () => {
      expect.assertions(1);

      const content = 'content';
      builder.setContent(content);

      expect(builder['current']).toStrictEqual(
        expect.objectContaining({
          content,
        }),
      );
    });
  });

  describe('add', () => {
    it('should append item to this.algoliasts', () => {
      expect.assertions(1);

      const algoliast: Algoliast = {
        permalink: 'https://example.com#hash',
        h1: 'heading 1',
        h2: 'heading 2',
        h3: 'heading 3',
        h4: 'heading 4',
        h5: 'heading 5',
        h6: 'heading 6',
        content: 'content',
        _tags: ['https://example.com'],
      };
      builder.add(algoliast);

      expect(builder['algoliasts']).toStrictEqual([algoliast]);
    });
  });

  describe('getAlgoliasts', () => {
    it('should return this.algoliasts', () => {
      expect.assertions(1);

      const algoliast: Algoliast = {
        permalink: 'https://example.com#hash',
        h1: 'heading 1',
        h2: 'heading 2',
        h3: 'heading 3',
        h4: 'heading 4',
        h5: 'heading 5',
        h6: 'heading 6',
        content: 'content',
        _tags: ['https://example.com'],
      };
      builder.add(algoliast);
      builder.add(algoliast);
      builder.add(algoliast);

      expect(builder.getAlgoliasts()).toStrictEqual([
        algoliast,
        algoliast,
        algoliast,
      ]);
    });
  });

  describe('getCurrentAlgoliast', () => {
    it('should return this.current', () => {
      expect.assertions(1);

      const heading1 = 'heading 1';
      const heading2 = 'heading 2';
      const heading3 = 'heading 3';
      const heading4 = 'heading 4';
      const heading5 = 'heading 5';
      const heading6 = 'heading 6';
      const content = 'content';
      builder.setHeading('h1', heading1);
      builder.setHeading('h2', heading2);
      builder.setHeading('h3', heading3);
      builder.setHeading('h4', heading4);
      builder.setHeading('h5', heading5);
      builder.setHeading('h6', heading6);
      builder.setContent(content);

      expect(builder.getCurrentAlgoliast()).toStrictEqual({
        permalink: `${baseUrl}#${heading6}`,
        h1: heading1,
        h2: heading2,
        h3: heading3,
        h4: heading4,
        h5: heading5,
        h6: heading6,
        content,
        _tags: [baseUrl],
      });
    });
  });

  describe('getLastAlgoliast', () => {
    it('should return last item in this.algoliasts', () => {
      expect.assertions(1);

      const baseAlgoliast: Algoliast = {
        permalink: 'https://example.com#hash',
        h1: 'heading 1',
        h2: 'heading 2',
        h3: 'heading 3',
        h4: 'heading 4',
        h5: 'heading 5',
        h6: 'heading 6',
        content: '',
        _tags: ['https://example.com'],
      };
      const algoliast1 = { ...baseAlgoliast, content: '1' };
      const algoliast2 = { ...baseAlgoliast, content: '2' };
      const algoliast3 = { ...baseAlgoliast, content: '3' };
      builder.add(algoliast1);
      builder.add(algoliast2);
      builder.add(algoliast3);

      expect(builder.getLastAlgoliast()).toStrictEqual(algoliast3);
    });
  });
});

describe('getText', () => {
  it('should return recursively merged text from tree', () => {
    expect.assertions(1);

    const text = getText({
      type: 'element',
      tagName: 'div',
      children: [
        {
          type: 'element',
          tagName: 'p',
          children: [
            {
              type: 'text',
              value: 'a',
            },
            {
              type: 'text',
              value: 'b ',
            },
          ],
        },
        {
          type: 'element',
          tagName: 'div',
          children: [
            {
              type: 'element',
              tagName: 'p',
              children: [
                {
                  type: 'text',
                  value: '\n \rc\r\n',
                },
              ],
            },
            {
              type: 'element',
              tagName: 'div',
              children: [
                {
                  type: 'text',
                  value: '  d  ',
                },
              ],
            },
          ],
        },
      ],
    });

    expect(text).toBe('ab  c  d  ');
  });
});

describe('isInSameBlock', () => {
  it('should return true when all headings are equal', () => {
    expect.assertions(1);

    const obj1: Algoliast = {
      permalink: 'https://example.com/obj1',
      h1: 'heading 1',
      h2: 'heading 2',
      h3: 'heading 3',
      h4: 'heading 4',
      h5: 'heading 5',
      h6: 'heading 6',
      content: 'obj1',
      _tags: ['https://example.com'],
    };
    const obj2: Algoliast = {
      permalink: 'https://example.com/obj2',
      h1: 'heading 1',
      h2: 'heading 2',
      h3: 'heading 3',
      h4: 'heading 4',
      h5: 'heading 5',
      h6: 'heading 6',
      content: 'obj2',
      _tags: ['https://example.com'],
    };

    expect(isInSameBlock(obj1, obj2)).toBe(true);
  });

  it('should return false when at least one heading is not equal', () => {
    expect.assertions(1);

    const obj1: Algoliast = {
      permalink: 'https://example.com/obj1',
      h1: 'heading 1',
      h2: 'heading 2',
      h3: 'heading 3',
      h4: 'heading 4',
      h5: 'heading 5',
      h6: 'heading 6',
      content: 'obj1',
      _tags: ['https://example.com'],
    };
    const obj2: Algoliast = {
      permalink: 'https://example.com/obj2',
      h1: 'heading 1',
      h2: 'heading 2',
      h3: 'heading 3',
      h4: 'heading 4',
      h5: 'heading 5',
      h6: '',
      content: 'obj2',
      _tags: ['https://example.com'],
    };

    expect(isInSameBlock(obj1, obj2)).toBe(false);
  });
});

describe('rehypeAlgolia', () => {
  it('should compile html to algolists', async () => {
    expect.assertions(1);

    // eslint-disable-next-line
    const { result } = await unified()
      .use(rehypeParse)
      .use(rehypeAlgolia)
      .data('settings', {
        baseUrl: '/example',
        endingChar: '.',
        exclude: (node) => node.properties?.dataNoindex === 'true',
      } as Settings)
      .process(Buffer.from(__HTML_CONTENT));

    expect(result).toStrictEqual(__ALGOLIASTS);
  });
});

describe('toAlgoliasts', () => {
  it('should return array of algoliast', async () => {
    expect.assertions(1);

    const algoliasts = await toAlgoliasts(__HTML_CONTENT, {
      baseUrl: '/example',
      endingChar: '.',
      exclude: (node) => node.properties?.dataNoindex === 'true',
    });

    expect(algoliasts).toStrictEqual(__ALGOLIASTS);
  });
});

/**
 * TODO: test after jest supports esm mock
 * jest.mock, __mocks__, dynamic import
 * maybe mock must be in the same scope with the import being used?
 * @see https://github.com/facebook/jest/issues/10025
 */
describe('indexDocument', () => {
  it.todo('test indexDocument when jest supports esm mock');
});
