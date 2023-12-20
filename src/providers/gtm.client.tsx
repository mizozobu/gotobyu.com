'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';
import { GOOGLE_TAG_MANAGER_ID } from '@/config';

/**
 * Props for {@link GtmProvider}
 */
interface Props<T extends ReactNode> {
  /** Children to pass */
  children: T;
}

/**
 * Google Tag Manager provider HOC
 */
export const GtmProvider = <T extends ReactNode>({ children }: Props<T>): T => {
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

  return children;
};
