import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  type InstantSearchProps,
} from 'react-instantsearch-dom';
import {
  ALGOLIA_INDEX_NAME,
  ALGOLIA_APP_ID,
  ALGOLIA_API_KEY,
} from './algolia.constants';
import { createCustomAlgoliaSearchClient } from './algolia.util';

/**
 * Algolia search client
 */
const algoliaSearchClient = createCustomAlgoliaSearchClient(
  algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY),
);

/**
 * Props for {@link AlgoliaProvider}
 */
interface Props
  extends Omit<InstantSearchProps, 'indexName' | 'searchClient'> {}

/**
 * Root component for algolia search. Most algolia components should be rendered within this component
 */
export const AlgoliaProvider = (props: Props): JSX.Element => (
  <InstantSearch
    indexName={ALGOLIA_INDEX_NAME}
    searchClient={algoliaSearchClient}
    {...props}
  />
);
