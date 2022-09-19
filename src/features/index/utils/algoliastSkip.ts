import { type Algoliast } from '@/features/search';
import { type Compare } from '../types';

/**
 * Check whether to skip operation
 * @param a {@link Algoliast}
 * @param b {@link Algoliast}
 * @returns Whether to skip mapping to operation(no operation required)
 */
export const algoliastSkip: Compare<Algoliast> = (a, b) =>
  a.content === b.content;
