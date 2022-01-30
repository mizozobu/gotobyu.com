import type { Element } from 'hast';
import type { Heading } from 'mdast';
import type { ValuesType } from 'utility-types';
import type { HEADING_TAGS } from './builder.constants';
/**
 * type for heading depth
 */
export type HeadingDepth = Heading['depth'];

/**
 * type for heading tag
 */
export type HeadingTag = ValuesType<typeof HEADING_TAGS>;

/**
 * type for indexable object in algolia
 */
export interface Algoliast {
  permalink: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  content: string;
}

/**
 * type for unified settings
 */
export interface Settings {
  exclude: (node: Element) => boolean;
}
