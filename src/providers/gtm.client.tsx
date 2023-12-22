'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { GOOGLE_TAG_MANAGER_ID } from '@/config';

/**
 * Google Tag Manager provider
 */
export const GtmProvider = (): null => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (GOOGLE_TAG_MANAGER_ID && pathname) {
      const url = searchParams
        ? `${pathname}?${searchParams.toString()}`
        : pathname;

      window.dataLayer.push({
        event: 'pageview',
        page: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
};
