import { InstantSearch, InstantSearchProps } from 'react-instantsearch-dom';
import { ALGOLIA_INDEX_NAME } from '@l/algolia/builder';
import { customAlgoliaSearchClient } from '@l/algolia/client';

interface Props
  extends Omit<InstantSearchProps, 'indexName' | 'searchClient'> {}

export const AlgoliaProvider = (props: Props) => (
  <InstantSearch
    indexName={ALGOLIA_INDEX_NAME}
    searchClient={customAlgoliaSearchClient}
    {...props}
  />
);
