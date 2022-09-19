import type { Hit } from 'react-instantsearch-core';

/**
 * Type for indexable object in algolia
 */
export interface Algoliast {
  /** Link to the content */
  permalink: string;
  /** h1 heading */
  h1: string;
  /** h2 heading */
  h2: string;
  /** h3 heading */
  h3: string;
  /** h4 heading */
  h4: string;
  /** h5 heading */
  h5: string;
  /** h6 heading */
  h6: string;
  /** Content body */
  content: string;
  /** Tags */
  _tags: string[];
}

/**
 * Type for heading tag
 */
export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

/**
 * Type for extra properties not defined in {@link Hit}
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
 * Type for actual hit object
 */
export type ActualHit<T> = Hit<T> & HitExtra;
