import type { Hit } from 'react-instantsearch-core';

/**
 * type for equal function
 */
export interface Compare<T> {
  (a: T, b: T): boolean;
}

/**
 * type for extra properties not defined in {@link Hit}
 */
export interface HitExtra {
  _snippetResult: {
    content: {
      matchLevel: 'none' | 'partial' | 'full';
      value: string;
    };
  };
}

/**
 * type for actual hit
 */
export type ActualHit<T> = Hit<T> & HitExtra;
