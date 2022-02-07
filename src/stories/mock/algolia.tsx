import type { Requester } from '@algolia/requester-common';
import algoliasearch from 'algoliasearch/lite';
import React, { ComponentPropsWithoutRef } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';

export const requester: Requester = {
  send: () => Promise.resolve({ status: 200, content: '', isTimedOut: false }),
};

export const MockInstantSearch = (
  props: Omit<
    ComponentPropsWithoutRef<typeof InstantSearch>,
    'indexName' | 'searchClient'
  >,
) => (
  <InstantSearch
    indexName=''
    searchClient={algoliasearch('', '', { requester })}
    {...props}
  />
);
