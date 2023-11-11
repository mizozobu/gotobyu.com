import type { SearchResponse } from '@algolia/client-search';
import algoliasearch from 'algoliasearch';
import type { Element } from 'hast';
import {
  ALGOLIA_APP_ID,
  ALGOLIA_INDEX_NAME,
  ALGOLIA_ADMIN_API_KEY,
} from '@/config';
import { type Algoliast } from '@/features/search';
import { algoliastEqual } from './algoliastEqual';
import { algoliastSkip } from './algoliastSkip';
import { mapToOperations } from './mapToOperations';
import { toAlgoliasts } from './toAlgoliasts';

/* eslint-disable no-console */
/**
 * Parse HTML file and index in algolia
 * @param path Realative path from BASE_URL
 */
export const indexDocument = async (path: string): Promise<void> => {
  /** HTML document to be indexed */
  const html = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`).then(
    (res) => res.text(),
  );

  /** new algoliasts to be indexed */
  const newAlgoliasts = await toAlgoliasts(html, {
    baseUrl: path,
    endingChar: '。',
    exclude: (node: Element) => node.properties?.dataNoindex === 'true',
  });

  /** algolia admin client */
  const algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY);
  const { results } = await algoliaClient.search<Algoliast>([
    {
      indexName: ALGOLIA_INDEX_NAME,
      query: '',
      params: {
        tagFilters: [path],
      },
    },
  ]);
  const existingAlgoliasts = (results as SearchResponse<Algoliast>[])[0].hits;
  const {
    addObjectOperations,
    updateObjectOperations,
    deleteObjectOperations,
  } = mapToOperations(
    ALGOLIA_INDEX_NAME,
    existingAlgoliasts,
    newAlgoliasts,
    algoliastEqual,
    algoliastSkip,
  );
  const { objectIDs } = await algoliaClient
    .multipleBatch([
      ...addObjectOperations,
      ...updateObjectOperations,
      ...deleteObjectOperations,
    ])
    .wait();

  console.log(`\x1b[35mevent\x1b[0m - Finished indexing ${path}`);
  console.log(
    `\x1b[36minfo\x1b[0m  - Affected ${objectIDs.length} records (${addObjectOperations.length} added, ${updateObjectOperations.length} updated, ${deleteObjectOperations.length} deleted).`,
  );

  return Promise.resolve();
};
/* eslint-enable no-console */
