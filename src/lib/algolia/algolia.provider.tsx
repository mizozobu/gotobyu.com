import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, InstantSearchProps } from 'react-instantsearch-dom';
import {
  ALGOLIA_INDEX_NAME,
  ALGOLIA_APP_ID,
  ALGOLIA_API_KEY,
} from './algolia.constants';
import { createCustomAlgoliaSearchClient } from './algolia.util';

/**
 * algolia search client instance
 */
const algoliaSearchClient = createCustomAlgoliaSearchClient(
  algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY),
);

interface Props
  extends Omit<InstantSearchProps, 'indexName' | 'searchClient'> {}

export const AlgoliaProvider = (props: Props) => (
  <InstantSearch
    indexName={ALGOLIA_INDEX_NAME}
    searchClient={algoliaSearchClient}
    {...props}
  />
);
