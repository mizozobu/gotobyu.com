import { useEffect, FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { MDXProvider } from '@mdx-js/react';
import { RecoilRoot } from 'recoil';
import Header from '@c/organisms/Header';
import { Footer } from '@c/organisms/Footer';
import ScrollIntoView from '@c/atoms/ScrollIntoView';
import CopiedDialog from '@c/organisms/CopiedDialog';
import { GTM_ID, pageview } from '@l/Gtm';
import { mdxComponents } from '@l/mdx';
import '~/styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
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
      <Head>
        {/* define defult title here until https://github.com/garmeeh/next-seo/pull/832 is merged */}
        <title>BYU Management Society Tokyo Chapter</title>
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
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        {/* End favicon */}

        <meta name='robots' content='noindex' />
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

      <a href='#maincontent' className='sr-only'>
        Skip to main content
      </a>

      <Header />

      <main id='maincontent'>
        <MDXProvider components={mdxComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </main>

      <CopiedDialog />
      <ScrollIntoView />

      <Footer />
    </RecoilRoot>
  );
};

export default MyApp;
