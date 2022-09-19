import { mapToOperations } from './mapToOperations';

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
