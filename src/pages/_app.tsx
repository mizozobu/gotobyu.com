import { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { RecoilRoot } from 'recoil';
import { Footer } from '@c/ecosystems/shared/Footer';
import { Header } from '@c/ecosystems/shared/Header';
import { HookRegistry } from '@c/ecosystems/shared/HookRegistry';
import { GTM_ID } from '@l/gtm';
import { MDX } from '@l/mdx';
import '~/styles/globals.css';

/**
 * Props for {@link MyApp}
 */
interface AppProps extends NextAppProps {
  pageProps: { [key: string]: unknown };
}

/**
 * Custom Next.js App
 */
const MyApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <HookRegistry pageProps={pageProps} />
    <Head>
      <title>gotobyu.com | 在学生と卒業生の声</title>
    </Head>

    {/* Google Tag Manager */}
    {GTM_ID && (
      <Script
        id='gtm'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${GTM_ID}');
            `,
        }}
      />
    )}
    {/* End Google Tag Manager */}

    <MDX.a
      href='#content'
      className='sr-only focus:not-sr-only'
      data-noindex='true'
    >
      Skip to main content
    </MDX.a>

    <Header />

    <main id='content'>
      <Component {...pageProps} />
    </main>

    <Footer />
  </RecoilRoot>
);

export default MyApp;
