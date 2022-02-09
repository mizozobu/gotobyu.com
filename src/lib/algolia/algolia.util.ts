import type { SearchClient } from 'algoliasearch/lite';
import type { Algoliast } from './algolia.interface';

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
 * custom algolia search client with the features below.
 * - avoid empty search request
 * - request only when keyword is more than 1 characters
 *
 * @see https://www.algolia.com/doc/guides/building-search-ui/going-further/conditional-requests/react/#detecting-empty-search-requests
 */
export const createCustomAlgoliaSearchClient = (
  algoliaSearch: SearchClient,
): SearchClient => ({
  ...algoliaSearch,
  search(requests) {
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

    return algoliaSearch.search(requests);
  },
});

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
