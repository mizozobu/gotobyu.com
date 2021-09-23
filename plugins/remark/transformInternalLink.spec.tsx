/* eslint-disable import/no-extraneous-dependencies */
/* latest versions have some issue wiht esm. use versions installed by mdx instead. */
/* waiting for this https://github.com/mdx-js/mdx/blob/main/packages/mdx/test/index.test.jsx */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import compile, { evaluate } from '@mdx-js/mdx';
import { renderToStaticMarkup } from 'react-dom/server';
import { InternalLink } from '@c/atoms/InternalLink';
import transformInternalLink from './transformInternalLink';

// eslint-disable-next-line jest/no-disabled-tests
describe('transformInternalLink', () => {
  it('should tranform a internal link', async () => {
    expect.assertions(1);

    const mdx = '[internal link](/example)';

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const result = await compile(mdx, {
      remarkPlugins: [transformInternalLink],
    });

    expect(renderToStaticMarkup(result)).toBe(
      renderToStaticMarkup(
        <InternalLink href='/example'>internal link</InternalLink>,
      ),
    );
  });

  it('should tranform an anchor link', async () => {
    expect.assertions(1);

    const mdx = '[anchor link](#example)';

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const result = await compile(mdx, {
      remarkPlugins: [transformInternalLink],
    });

    expect(renderToStaticMarkup(result)).toBe(
      renderToStaticMarkup(
        <InternalLink href='#example'>anchor link</InternalLink>,
      ),
    );
  });

  it('should not tranform an external link', async () => {
    expect.assertions(1);

    const mdx = '[external link](https://example.com)';

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const result = await compile(mdx, {
      remarkPlugins: [transformInternalLink],
    });

    expect(renderToStaticMarkup(result)).toBe(
      renderToStaticMarkup(
        <InternalLink href='https://example.com'>external link</InternalLink>,
      ),
    );
  });
});
