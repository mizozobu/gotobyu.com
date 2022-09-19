import type { Algoliast, HeadingTag } from '../types';

/**
 * Get smallest heading tag from hit
 * @param algoliast {@link Algoliast}
 * @returns Tag name for the smallest heading
 * @throws Throws when all headings are empty
 */
export const getSmallestHeadingTag = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}: Omit<Algoliast, 'permalink' | 'content' | '_tags'>): HeadingTag => {
  if (h6 !== '') return 'h6';
  if (h5 !== '') return 'h5';
  if (h4 !== '') return 'h4';
  if (h3 !== '') return 'h3';
  if (h2 !== '') return 'h2';
  if (h1 !== '') return 'h1';
  throw new Error(
    'cannot get the smallest heading tag since all headings are empty',
  );
};
