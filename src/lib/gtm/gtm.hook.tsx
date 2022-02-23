import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { GTM_ID } from '@l/gtm';

/**
 * google tag manager preview event
 */
export const useGtm = () => {
  const router = useRouter();

  const pageview = (url: string): void => {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  };

  useEffect(() => {
    if (!GTM_ID) return undefined;

    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, [router.events]);
};
