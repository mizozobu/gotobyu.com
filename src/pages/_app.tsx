import { MDXProvider } from '@mdx-js/react';
import { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { Footer } from '@cmp/organisms/Footer';
import { Header } from '@cnt//Header';
import { CopiedDialog } from '@cnt/CopiedDialog';
import { HookRegistry } from '@cnt/HookRegistry';
import { GTM_ID, pageview } from '@l/gtm';
import { MDX } from '@l/mdx';
import '~/styles/globals.css';

export interface AppProps extends NextAppProps {
  pageProps: { [key: string]: unknown };
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    if (GTM_ID) {
      router.events.on('routeChangeComplete', pageview);
      return () => {
        router.events.off('routeChangeComplete', pageview);
      };
    }
    return undefined;
  }, [router.events]);

  return (
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

      <MDX.a href='#content' className='sr-only focus:not-sr-only'>
        Skip to main content
      </MDX.a>

      <Header />

      <main id='content'>
        <MDXProvider components={MDX}>
          <Component {...pageProps} />
        </MDXProvider>
      </main>

      <CopiedDialog />
      <Footer />
    </RecoilRoot>
  );
};

export default MyApp;
