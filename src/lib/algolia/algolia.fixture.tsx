import type { Requester } from '@algolia/requester-common';
import algoliasearch from 'algoliasearch/lite';
import type { ComponentPropsWithoutRef } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import type { AlgoliaProvider } from '@l/algolia';

/**
 * Mock {@link Requester}
 */
export const requester: Requester = {
  send: () => Promise.resolve({ status: 200, content: '', isTimedOut: false }),
};

/**
 * Props for {@link MockInstantSearch}
 */
interface Props extends ComponentPropsWithoutRef<typeof AlgoliaProvider> {}

/**
 * Mock {@link InstantSearch}
 */
export const MockInstantSearch = (props: Props): JSX.Element => (
  <InstantSearch
    indexName=''
    searchClient={algoliasearch('', '', { requester })}
    {...props}
  />
);

/**
 * HTML content for test.
 * Minifying part is not reproduced exactly as how Next.js minifies HTML.
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
      <p><a href="https://example.com">this is in h<span>eadin</span>g 3-1.</a></p>
      <p>thi<a href="https://example.com"><span>s is i</span></a>n h<a href="https://example.com"><span>eadin</span></a>g 3-1.</p>
    </div>

    <h3>heading 3-2</h3>
    <div>

      <p>this is in heading 3-2</p>
      <p>this is in heading 3-2</p>
    </div>
  </body>
</html>
`.replace(/>\s+|\s+</g, (s) => s.trim());

/**
 * {@link __HTML_CONTENT} represented as algoliasts
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
  {
    permalink: '/example#heading 3-2',
    h1: 'heading 1-1',
    h2: 'heading 2-2',
    h3: 'heading 3-2',
    h4: '',
    h5: '',
    h6: '',
    content: 'this is in heading 3-2.this is in heading 3-2.',
    _tags: ['/example'],
  },
];
