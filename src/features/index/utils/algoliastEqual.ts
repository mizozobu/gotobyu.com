import { type Algoliast } from '@/features/search';
import { type Compare } from '../types';

/**
 * Check equality of {@link Algoliast}
 * @param a {@link Algoliast} to compare
 * @param b {@link Algoliast} to compare
 * @returns Whether algoliast1 is equal to algoliast2
 */
export const algoliastEqual: Compare<Algoliast> = (a, b) =>
  a.h1 === b.h1 &&
  a.h2 === b.h2 &&
  a.h3 === b.h3 &&
  a.h4 === b.h4 &&
  a.h5 === b.h5 &&
  a.h6 === b.h6;
