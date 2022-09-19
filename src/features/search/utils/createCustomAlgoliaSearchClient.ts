import type { SearchClient } from 'algoliasearch/lite';

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
