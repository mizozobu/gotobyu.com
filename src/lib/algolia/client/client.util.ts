import type { MultipleBatchRequest, Hit } from '@algolia/client-search';
import algoliasearch, { SearchClient } from 'algoliasearch/lite';
import {
  ALGOLIA_APP_ID,
  ALGOLIA_API_KEY,
  BATCH_ACTION,
  Algoliast,
} from '@l/algolia/builder';
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

/**
 * get smallest heading tag
 *
 * @param algoliast algoliast
 * @returns tag name for the smallest heading
 */
export const getSmallestHeadingTag = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}: Omit<Algoliast, 'permalink' | 'content' | '_tags'>) => {
  if (h6 !== '') return 'h6';
  if (h5 !== '') return 'h5';
  if (h4 !== '') return 'h4';
  if (h3 !== '') return 'h3';
  if (h2 !== '') return 'h2';
  if (h1 !== '') return 'h1';
  throw new Error(
    'cannot get the smallest heading tag since all headings are empty',
  );
};

/**
 * algolia search client instance
 */
export const algoliaSearchClient = algoliasearch(
  ALGOLIA_APP_ID,
  ALGOLIA_API_KEY,
);

/**
 * custom algolia search client with the features below.
 * - avoid empty search request
 *
 * @see https://www.algolia.com/doc/guides/building-search-ui/going-further/conditional-requests/react/#detecting-empty-search-requests
 */
export const customAlgoliaSearchClient: SearchClient = {
  ...algoliaSearchClient,
  search(requests) {
    // avoid sending requests if the query has less than 2 characters
    if (
      requests.every(
        ({ params }) =>
          params?.query === undefined || params?.query.trim().length < 2,
      )
    ) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
          hitsPerPage: 0,
          exhaustiveNbHits: true,
          query: '',
          params: '',
        })),
      });
    }

    return algoliaSearchClient.search(requests);
  },
};

/**
 * classify hits by h1
 *
 * @param hits hits
 * @returns hits classified by h1
 */
export const classifyHits = <T extends Algoliast>(
  hits: T[],
): { h1: string; hits: T[] }[] => {
  const tmp: Record<string, T[]> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const hit of hits) {
    if (tmp[hit.h1] === undefined) {
      tmp[hit.h1] = [hit];
    } else {
      tmp[hit.h1].push(hit);
    }
  }

  const classified: { h1: string; hits: T[] }[] = Object.entries(tmp).map(
    ([key, value]) => ({
      h1: key,
      hits: value,
    }),
  );

  return classified;
};
