import '@jest/globals';
import type { Algoliast } from '@l/algolia/builder';
import {
  algoalistEqual,
  mapToOperations,
  getSmallestHeadingTag,
  classifyHits,
} from './client.util';

describe('algoalistEqual', () => {
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

    expect(algoalistEqual(obj1, obj2)).toBe(true);
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

    expect(algoalistEqual(obj1, obj2)).toBe(false);
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
  ) => a.a === b.a;
  const skip = (
    a: { a: string; content: string },
    b: { a: string; content: string },
  ) => a.content === b.content;

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

describe('getSmallestHeadingTag', () => {
  it.each(
    // prettier-ignore
    [
      { hit: { h1: 'h1', h2: '', h3: '', h4: '', h5: '', h6: '' }, expected: 'h1' },
      { hit: { h1: 'h1', h2: 'h2', h3: '', h4: '', h5: '', h6: '' }, expected: 'h2' },
      { hit: { h1: 'h1', h2: 'h2', h3: 'h3', h4: '', h5: '', h6: '' }, expected: 'h3' },
      { hit: { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: '', h6: '' }, expected: 'h4' },
      { hit: { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: '' }, expected: 'h5' },
      { hit: { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6' }, expected: 'h6' },
    ],
  )(
    'should return "$expected" when $expected is the smallest heading tag',
    ({ hit, expected }) => {
      expect.assertions(1);

      expect(getSmallestHeadingTag(hit)).toBe(expected);
    },
  );

  it('should throw when all heading tags are empty', () => {
    expect.assertions(1);

    expect(() =>
      getSmallestHeadingTag({ h1: '', h2: '', h3: '', h4: '', h5: '', h6: '' }),
    ).toThrow(
      'cannot get the smallest heading tag since all headings are empty',
    );
  });
});

describe('classifyHits', () => {
  it('should classify hits by h1', () => {
    expect.assertions(1);

    const obj1: Algoliast = {
      permalink: 'https://example.com/obj1',
      h1: 'heading a',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
      content: 'obj1',
      _tags: ['https://example.com'],
    };
    const obj2: Algoliast = {
      permalink: 'https://example.com/obj2',
      h1: 'heading b',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
      content: 'obj2',
      _tags: ['https://example.com'],
    };
    const obj3: Algoliast = {
      permalink: 'https://example.com/obj3',
      h1: 'heading a',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
      content: 'obj3',
      _tags: ['https://example.com'],
    };

    expect(classifyHits([obj1, obj2, obj3])).toStrictEqual([
      {
        h1: 'heading a',
        hits: [obj1, obj3],
      },
      {
        h1: 'heading b',
        hits: [obj2],
      },
    ]);
  });
});
