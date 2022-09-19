import type { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { InternalLink } from '@/components/atoms/InternalLink';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { GOOGLE_TAG_MANAGER_ID } from '@/config';
import { AppProvider } from '@/providers/app';
import '@/styles/globals.css';

/**
 * Props for {@link MyApp}
 */
interface AppProps extends NextAppProps {
  pageProps: { [key: string]: unknown };
}

/**
 * Custom Next.js App
 */
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <AppProvider pageProps={pageProps}>
    <Head>
      <title>gotobyu.com | 在学生と卒業生の声</title>
    </Head>

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

    <main id='content'>
      <Component {...pageProps} />
    </main>

    <Footer />
  </AppProvider>
);

export default MyApp;
