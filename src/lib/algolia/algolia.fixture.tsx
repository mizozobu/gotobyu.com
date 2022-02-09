import type { Requester } from '@algolia/requester-common';
import algoliasearch from 'algoliasearch/lite';
import { ComponentPropsWithoutRef } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { AlgoliaProvider } from '@l/algolia';

export const requester: Requester = {
  send: () => Promise.resolve({ status: 200, content: '', isTimedOut: false }),
};

interface Props extends ComponentPropsWithoutRef<typeof AlgoliaProvider> {}

/**
 * InstantSearch mock
 *
 * @param props
 * @returns
 */
export const MockInstantSearch = (props: Props) => (
  <InstantSearch
    indexName=''
    searchClient={algoliasearch('', '', { requester })}
    {...props}
  />
);

/**
 * html content for test
 */
export const __HTML_CONTENT = `
<!DOCTYPE html>
<html>
  <head>
    <title>this should not be indexed.</title>
    <meta name="keywords" content="this should not be indexed.">
  </head>
  <body>
    <h1>heading 1-1</h1>
    <p>this is in heading 1-1.</p>
    <p>this is in heading 1-1.</p>
    <p data-noindex="true">this should not be indexed.</p>

    <section data-noindex="true">
      <h1>this should not be indexed.</h1>
      <div>
        this should not be indexed.
        <p>this should not be indexed.</p>
      </div>
    </section>

    <h2>
      <a href='https://example.com'>heading 2-1</a>
    </h2>
    <p>this is in heading 2-1.</p>
    <p data-noindex="true">this should not be indexed.</p>
    <div>
      <p data-noindex="true">this should not be indexed.</p>
      <div>
        <p>this is in heading 2-1.</p>
        <p data-noindex="true">this should not be indexed.</p>
      </div>
    </div>

    <section>
      <h2>heading 2-2</h2>
      <div>
        this is in heading 2-2.
        <div>
          <p>this is in heading 2-2.</p>
        </div>
      </div>
    </section>

    <h3>heading 3-1</h3>
    <div data-noindex="true">
      <p>this should not be indexed.</p>
      <div>
        <p>this should not be indexed.</p>
      </div>
    </div>
    <div>
      <p><a href="https://example.com">this is in<span> heading </span>3-1.</a></p>
      <p>this <a href="https://example.com"><span>is</span></a> in<a href="https://example.com"><span> heading </span></a>3-1.</p>
    </div>
  </body>
</html>
`;

/**
 * __HTML_CONTENT as algoliasts
 */
export const __ALGOLIASTS = [
  {
    permalink: '/example#heading 1-1',
    h1: 'heading 1-1',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    content: 'this is in heading 1-1.this is in heading 1-1.',
    _tags: ['/example'],
  },
  {
    permalink: '/example#heading 2-1',
    h1: 'heading 1-1',
    h2: 'heading 2-1',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    content: 'this is in heading 2-1.this is in heading 2-1.',
    _tags: ['/example'],
  },
  {
    permalink: '/example#heading 2-2',
    h1: 'heading 1-1',
    h2: 'heading 2-2',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    content: 'this is in heading 2-2.this is in heading 2-2.',
    _tags: ['/example'],
  },
  {
    permalink: '/example#heading 3-1',
    h1: 'heading 1-1',
    h2: 'heading 2-2',
    h3: 'heading 3-1',
    h4: '',
    h5: '',
    h6: '',
    content: 'this is in heading 3-1.this is in heading 3-1.',
    _tags: ['/example'],
  },
];
