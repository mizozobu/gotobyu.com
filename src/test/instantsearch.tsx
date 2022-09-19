import type { Requester } from '@algolia/requester-common';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';

/**
 * Mock {@link Requester}
 */
const requester: Requester = {
  send: () => Promise.resolve({ status: 200, content: '', isTimedOut: false }),
};

/**
 * Props for {@link MockInstantSearch}
 */
interface Props {
  children: React.ReactNode;
}

/**
 * Mock {@link InstantSearch}
 */
export const MockInstantSearch = ({ children }: Props): JSX.Element => (
  <InstantSearch
    indexName=''
    searchClient={algoliasearch('', '', { requester })}
  >
    {children}
  </InstantSearch>
);
