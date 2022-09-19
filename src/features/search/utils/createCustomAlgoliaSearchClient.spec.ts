import algoliasearch from 'algoliasearch';
import type { SpyInstance } from 'jest-mock';
import { createCustomAlgoliaSearchClient } from './createCustomAlgoliaSearchClient';

describe('createCustomAlgoliaSearchClient', () => {
  it('should return a AlgoliaSearch instance with custom "search" function', () => {
    expect.assertions(1);

    const algoliaSearch = algoliasearch('', '');
    const customSearchClient = createCustomAlgoliaSearchClient(algoliaSearch);

    expect(customSearchClient.search.toString()).not.toBe(
      algoliaSearch.search.toString(),
    );
  });

  describe('search', () => {
    const algoliaSearch = algoliasearch('', '');
    let __search: SpyInstance<typeof algoliaSearch.search>;

    beforeEach(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      __search = jest.spyOn(algoliaSearch, 'search').mockResolvedValueOnce({
        results: [],
      });
    });

    it('should call custom search method when keyword is less than equal to 1 character', async () => {
      expect.assertions(1);

      const customSearchClient = createCustomAlgoliaSearchClient(algoliaSearch);

      const requests = [{ indexName: 'indexName', params: { query: '1' } }];
      await customSearchClient.search(requests);

      expect(__search).not.toHaveBeenCalled();
    });

    it('should call original search method when keyword is more than 1 character', async () => {
      expect.assertions(1);

      const customSearchClient = createCustomAlgoliaSearchClient(algoliaSearch);

      const requests = [{ indexName: 'indexName', params: { query: '12' } }];
      await customSearchClient.search(requests);

      // eslint-disable-next-line jest/prefer-strict-equal
      expect(__search.mock.calls).toEqual([[requests]]);
    });
  });
});
