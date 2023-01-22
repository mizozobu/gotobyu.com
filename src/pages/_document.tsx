import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GOOGLE_TAG_MANAGER_ID, ALGOLIA_APP_ID } from '@/config';

/**
 * Next.js custom document
 */
class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='ja'>
        <Head>
          {/* favicon https://realfavicongenerator.net */}
          <link
            // eslint-disable-next-line react/no-invalid-html-attribute
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          {/* eslint-disable-next-line react/no-invalid-html-attribute */}
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap'
            rel='stylesheet'
          />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' />
          {/* End favicon */}
          {/* algolia */}
          <link
            rel='preconnect'
            href={`https://${ALGOLIA_APP_ID}-dsn.algolia.net`}
            crossOrigin='anonymous'
          />
          {/* End algolia */}
        </Head>

        <body>
          {/* Google Tag Manager (noscript) */}
          {GOOGLE_TAG_MANAGER_ID && (
            <noscript>
              {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
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
