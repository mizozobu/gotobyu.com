import type { Element } from 'hast';
import type { Heading } from 'mdast';

/**
 * Type for heading depth
 */
export type HeadingDepth = Heading['depth'];

/**
 * Type for {@link Algoliast} equal function
 */
export interface Compare<T> {
  (a: T, b: T): boolean;
}

/**
 * Type for unified settings
 */
export interface RehypeAlgoliaSettings {
  /** Base URL for {@link Algoliast.permalink} */
  baseUrl: string;
  /** Ending charater of a sentense such as "." and "。" */
  endingChar?: string;
  /** Filter function to exclude node */
  exclude?: (node: Element) => boolean;
}

declare module 'unified' {
  interface Settings extends RehypeAlgoliaSettings {}
}
