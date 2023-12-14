import type { Metadata } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';
import { InternalLink } from '@/components/atoms/InternalLink';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { GOOGLE_TAG_MANAGER_ID, ALGOLIA_APP_ID, BASE_URL } from '@/config';
import { GtmProvider } from '@/providers/gtm';
import { RecoilRoot } from '@/providers/recoil';
import '@/styles/globals.css';

const title = {
  template: '%s | gotobyu.com',
  default: 'gotobyu.com | 在学生と卒業生の声',
};

/**
 * Metadata for {@link RootLayout}
 */
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title,
  openGraph: {
    title,
    siteName: 'gotobyu.com | 在学生と卒業生の声',
    locale: 'ja_JP',
    images: [
      {
        url: '/open-graph.png',
        width: 600,
        height: 600,
        alt: 'gotobyu.com',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title,
    images: '/open-graph.png',
  },
};

/**
 * Props for {@link RootLayout}
 */
interface Props {
  children: ReactNode;
}

/**
 * Layout for all pages
 */
const RootLayout = ({ children }: Props): JSX.Element => (
  <html lang='ja'>
    <head>
      {/* favicon https://realfavicongenerator.net */}
      <link
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
    </head>

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
      <GtmProvider>
        <RecoilRoot>
          {/* Google Tag Manager */}
          {GOOGLE_TAG_MANAGER_ID && (
            <Script
              id='gtm'
              strategy='afterInteractive'
              dangerouslySetInnerHTML={{
                __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${GOOGLE_TAG_MANAGER_ID}');
            `,
              }}
            />
          )}
          {/* End Google Tag Manager */}
          <InternalLink
            href='#content'
            className='sr-only focus:not-sr-only'
            data-noindex='true'
          >
            Skip to main content
          </InternalLink>
          <Header />
          <main id='content'>{children}</main>
          <Footer />
        </RecoilRoot>
      </GtmProvider>
    </body>
  </html>
);

export default RootLayout;
