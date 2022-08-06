import algoliasearch from 'algoliasearch';
import type { SpyInstance } from 'jest-mock';
import type { Algoliast } from './algolia.interface';
import {
  getSmallestHeadingTag,
  createCustomAlgoliaSearchClient,
  classifyHits,
} from './algolia.util';

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

  it('should throw when none of the heading tags have value', () => {
    expect.assertions(1);

    expect(() =>
      getSmallestHeadingTag({ h1: '', h2: '', h3: '', h4: '', h5: '', h6: '' }),
    ).toThrow(
      'cannot get the smallest heading tag since all headings are empty',
    );
  });
});

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
