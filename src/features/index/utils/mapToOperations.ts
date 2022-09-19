import type {
  MultipleBatchRequest,
  Hit,
  BatchActionType,
} from '@algolia/client-search';
import { type Compare } from '../types';

/**
 * Algolia multiple batch action type
 */
const BATCH_ACTION: { [key: string]: BatchActionType } = {
  /** addObject */
  add: 'addObject',
  /** updateObject */
  update: 'updateObject',
  /** partialUpdateObject */
  partialUpdate: 'partialUpdateObject',
  /** deleteObject */
  delete: 'deleteObject',
} as const;

/**
 * Map search hit objects and new records to addObject, updateObject, and deleteObject operations.
 * Do the same thing as "replaceAllObjects", but in a better way.
 * @see {@link https://www.algolia.com/doc/api-reference/api-methods/batch/}
 * @param _objectsfromAlgolia list of objects returned from algolia
 * @param _newObjects list of objects to replace the current index
 * @returns algolia custom batch operations supplied to "multipleBatch"
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapToOperations = <T extends Record<string, any>>(
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
