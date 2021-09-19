import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GTM_ID } from '@l/gtm';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='ja'>
        <Head />
        <body>
          {/* Google Tag Manager (noscript) */}
          {GTM_ID && (
            <noscript>
              {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height='0'
                width='0'
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          )}
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
