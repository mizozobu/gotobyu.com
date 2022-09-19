import algoliasearch from 'algoliasearch/lite';
import { type ReactNode } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { ALGOLIA_INDEX_NAME, ALGOLIA_APP_ID, ALGOLIA_API_KEY } from '@/config';
import { createCustomAlgoliaSearchClient } from '../utils/createCustomAlgoliaSearchClient';

/**
 * Algolia search client
 */
const algoliaSearchClient = createCustomAlgoliaSearchClient(
  algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY),
);

/**
 * Props for {@link AlgoliaProvider}
 */
interface Props {
  children: ReactNode;
}

/**
 * Provider for algolia search. Most algolia components should be rendered within this component.
 */
export const AlgoliaProvider = ({ children }: Props): JSX.Element => (
  <InstantSearch
    indexName={ALGOLIA_INDEX_NAME}
    searchClient={algoliaSearchClient}
  >
    {children}
  </InstantSearch>
);
