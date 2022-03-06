import type { Element } from 'hast';
import type { Heading } from 'mdast';
import type { Hit } from 'react-instantsearch-core';
import type { ValuesType } from 'utility-types';
import type { HEADING_TAGS } from './algolia.constants';

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
 * Type for unified settings
 */
export interface Settings {
  /** Base URL for {@link Algoliast.permalink} */
  baseUrl: string;
  /** Ending charater of a sentense such as "." and "。" */
  endingChar?: string;
  /** Filter function to exclude node */
  exclude?: (node: Element) => boolean;
}

/**
 * Type for heading depth
 */
export type HeadingDepth = Heading['depth'];

/**
 * Type for heading tag
 */
export type HeadingTag = ValuesType<typeof HEADING_TAGS>;

/**
 * Type for {@link Algoliast} equal function
 */
export interface Compare<T> {
  (a: T, b: T): boolean;
}

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
