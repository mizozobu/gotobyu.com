import rehypeParse from 'rehype-parse';
import { unified } from 'unified';
import { __HTML_CONTENT, __ALGOLIASTS } from '@/test/html';
import { type RehypeAlgoliaSettings } from '../types';
import { rehypeAlgolia } from './rehypeAlgolia';

describe('rehypeAlgolia', () => {
  it('should compile html to algolists', async () => {
    expect.assertions(1);

    const { result } = await unified()
      .use(rehypeParse)
      .use(rehypeAlgolia)
      .data('settings', {
        baseUrl: '/example',
        endingChar: '.',
        exclude: (node) => node.properties?.dataNoindex === 'true',
      } as RehypeAlgoliaSettings)
      .process(Buffer.from(__HTML_CONTENT));

    expect(result).toStrictEqual(__ALGOLIASTS);
  });
});
