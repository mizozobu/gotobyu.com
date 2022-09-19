import { __HTML_CONTENT, __ALGOLIASTS } from '@/test/html';
import { toAlgoliasts } from './toAlgoliasts';

describe('toAlgoliasts', () => {
  it('should return array of algoliast', async () => {
    expect.assertions(1);

    const algoliasts = await toAlgoliasts(__HTML_CONTENT, {
      baseUrl: '/example',
      endingChar: '.',
      exclude: (node) => node.properties?.dataNoindex === 'true',
    });

    expect(algoliasts).toStrictEqual(__ALGOLIASTS);
  });
});
