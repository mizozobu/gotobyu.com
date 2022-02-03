import type { MultipleBatchRequest, Hit } from '@algolia/client-search';
import type { Algoliast } from '@l/algolia/builder';
import { BATCH_ACTION } from './client.constants';
import type { Compare } from './client.interface';

/**
 * check equality of algoliast
 *
 * @param a algoliast1
 * @param b algoliast2
 * @returns whether algoliast1 is equal to algoliast2
 */
export const algoalistEqual: Compare<Algoliast> = (a, b) =>
  a.h1 === b.h1 &&
  a.h2 === b.h2 &&
  a.h3 === b.h3 &&
  a.h4 === b.h4 &&
  a.h5 === b.h5 &&
  a.h6 === b.h6;

/**
 * check whether to skip operation
 *
 * @param a algoliast1
 * @param b algoliast2
 * @returns whether to skip mapping to operation(no operation required)
 */
export const algoalistSkip: Compare<Algoliast> = (a, b) =>
  a.content === b.content;

/**
 * map search hit objects and new records to addObject, updateObject, and deleteObject operations.
 * do the same thing as "replaceAllObjects", but in a better way.
 *
 * @param objectsfromAlgolia list of objects returned from algolia
 * @param newObjects list of objects to replace the current index
 * @returns algolia custom batch operations supplied to "multipleBatch"
 * @see https://www.algolia.com/doc/api-reference/api-methods/batch/
 */
export const mapToOperations = <T>(
  indexName: string,
  _objectsfromAlgolia: Hit<T>[],
  _newObjects: T[],
  equal: Compare<T>,
  skip: Compare<T>,
): {
  addObjectOperations: MultipleBatchRequest[];
  updateObjectOperations: MultipleBatchRequest[];
  deleteObjectOperations: MultipleBatchRequest[];
} => {
  // copy to avoid mutating original array
  const objectsfromAlgolia = [..._objectsfromAlgolia];
  const newObjects = [..._newObjects];

  const addObjectOperations = [];
  const updateObjectOperations = [];

  for (let i = 0; i < newObjects.length; i += 1) {
    const newObj = newObjects[i];
    let existsInAlgolia = false;
    for (let j = 0; j < objectsfromAlgolia.length; j += 1) {
      const algoliaObj = objectsfromAlgolia[j];
      if (equal(newObj, algoliaObj)) {
        existsInAlgolia = true;
        if (!skip(newObj, algoliaObj)) {
          updateObjectOperations.push({
            indexName,
            action: BATCH_ACTION.update,
            body: {
              ...algoliaObj,
              ...newObj,
            },
          });
        }
        // remove item to shrink array size for later iteration
        objectsfromAlgolia.splice(j, 1);
        j -= 1;
        break;
      }
    }

    if (!existsInAlgolia) {
      addObjectOperations.push({
        indexName,
        action: BATCH_ACTION.add,
        body: newObj,
      });
      newObjects.shift();
    }
  }

  const deleteObjectOperations = objectsfromAlgolia.map(({ objectID }) => ({
    indexName,
    action: BATCH_ACTION.delete,
    body: {
      objectID,
    },
  }));

  return {
    addObjectOperations,
    updateObjectOperations,
    deleteObjectOperations,
  };
};
