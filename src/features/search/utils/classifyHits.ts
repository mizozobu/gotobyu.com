import type { Algoliast } from '../types';

/**
 * Classify algoliasts by h1
 * @param algoliasts Array of {@link Algoliast}
 * @returns Algoliasts classified by h1
 */
export const classifyHits = <T extends Algoliast>(
  algoliasts: T[],
): { h1: string; hits: T[] }[] => {
  const tmp: Record<string, T[]> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const algoliast of algoliasts) {
    if (tmp[algoliast.h1] === undefined) {
      tmp[algoliast.h1] = [algoliast];
    } else {
      tmp[algoliast.h1].push(algoliast);
    }
  }

  const classified: { h1: string; hits: T[] }[] = Object.entries(tmp).map(
    ([key, value]) => ({
      h1: key,
      hits: value,
    }),
  );

  return classified;
};
