import rehypeParse from 'rehype-parse';
import { unified } from 'unified';
import type { VFileCompatible } from 'vfile';
import { type Algoliast } from '@/features/search';
import { type RehypeAlgoliaSettings } from '../types';
import { rehypeAlgolia } from './rehypeAlgolia';

/**
 * Covert HTML to an array of {@link Algoliast Algoliasts}
 * @param html HTML file content
 * @param settings {@link RehypeAlgoliaSettings}
 * @returns Array of {@link Algoliast Algoliasts}
 */
export const toAlgoliasts = async (
  html: VFileCompatible,
  settings: RehypeAlgoliaSettings,
): Promise<Algoliast[]> => {
  const { result } = await unified()
    .use(rehypeParse)
    .use(rehypeAlgolia)
    .data('settings', settings)
    .process(html);

  return result as Algoliast[];
};
