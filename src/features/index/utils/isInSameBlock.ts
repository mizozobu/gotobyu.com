import { type Algoliast } from '@/features/search';

/**
 * Check if algoliast is under the same heading
 * @param algoliast1 {@link Algoliast} to compare
 * @param algoliast2 {@link Algoliast} to compare
 * @returns Whether the two {@link Algoliast Algoliasts} are under the same heading
 */
export const isInSameBlock = (
  algoliast1: Algoliast,
  algoliast2: Algoliast,
): boolean =>
  algoliast1.h1 === algoliast2.h1 &&
  algoliast1.h2 === algoliast2.h2 &&
  algoliast1.h3 === algoliast2.h3 &&
  algoliast1.h4 === algoliast2.h4 &&
  algoliast1.h5 === algoliast2.h5 &&
  algoliast1.h6 === algoliast2.h6;
