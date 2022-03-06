import type { SearchClient } from 'algoliasearch/lite';
import type { Algoliast } from './algolia.interface';

/**
 * Get smallest heading tag from hit
 * @param algoliast {@link Algoliast}
 * @returns Tag name for the smallest heading
 * @throws Throws when all headings are empty
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
 * Custom algolia search client with the features below.
 * - Avoid empty search request
 * - Request only when keyword is more than 1 characters
 * @see {@link https://www.algolia.com/doc/guides/building-search-ui/going-further/conditional-requests/react/#detecting-empty-search-requests}
 * @param algoliaSearch Algolia {@link SearchClient}
 * @returns Custom algolia search client
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
 * Classify algoliasts by h1
 * @param algoliasts Array of {@link Algoliast}
 * @returns Algoliasts classified by h1
 */
export const classifyHits = <T extends Algoliast>(
  algoliasts: T[],
): { h1: string; hits: T[] }[] => {
  const tmp: Record<string, T[]> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const algoliast of algoliasts) {
    if (tmp[algoliast.h1] === undefined) {
      tmp[algoliast.h1] = [algoliast];
    } else {
      tmp[algoliast.h1].push(algoliast);
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
