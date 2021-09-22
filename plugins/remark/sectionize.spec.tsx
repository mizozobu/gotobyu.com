/* eslint-disable import/no-extraneous-dependencies */
/* latest versions have some issue wiht esm. use versions installed by mdx instead. */
/* waiting for this https://github.com/mdx-js/mdx/blob/main/packages/mdx/test/index.test.jsx */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { evaluate } from '@mdx-js/mdx';
import { renderToStaticMarkup } from 'react-dom/server';
import { Section } from '@c/atoms/Section';
import sectionize from './sectionize';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('sectionize', () => {
  it('should wrap <h2 /> in a section', async () => {
    expect.assertions(1);

    const mdx = '## heading1';

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const result = await evaluate(mdx, {
      remarkPlugins: [sectionize],
    });

    expect(renderToStaticMarkup(result)).toBe(
      renderToStaticMarkup(
        <Section id='heading1'>
          <h2>heading1</h2>
          <div className='px-0 md:px-6 lg:px-12 space-y-4' />
        </Section>,
      ),
    );
  });

  it('should not wrap <h1 /> in a section', async () => {
    expect.assertions(1);

    const mdx = '# heading1';

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const result = await evaluate(mdx, {
      remarkPlugins: [sectionize],
    });

    expect(renderToStaticMarkup(result)).toBe(
      renderToStaticMarkup(<h1>heading1</h1>),
    );
  });

  it('should not wrap <p /> in a section', async () => {
    expect.assertions(1);

    const mdx = 'paragraph1';

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const result = await evaluate(mdx, {
      remarkPlugins: [sectionize],
    });

    expect(renderToStaticMarkup(result)).toBe(
      renderToStaticMarkup(<p>paragraph1</p>),
    );
  });

  it('should wrap <h2 /> and <p /> in a section', async () => {
    expect.assertions(1);

    const mdx = ['## heading1', 'paragraph1'].join('\n');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const result = await evaluate(mdx, {
      remarkPlugins: [sectionize],
    });

    expect(renderToStaticMarkup(result)).toBe(
      renderToStaticMarkup(
        <Section id='heading1'>
          <h2>heading1</h2>
          <div className='px-0 md:px-6 lg:px-12 space-y-4'>
            <p>paragraph1</p>
          </div>
        </Section>,
      ),
    );
  });

  it('should wrap <h2 /> and multiple <p /> in a section', async () => {
    expect.assertions(1);

    const mdx = ['## heading1', 'paragraph1', 'paragraph2', 'paragraph3'].join(
      '\n',
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const result = await evaluate(mdx, {
      remarkPlugins: [sectionize],
    });

    expect(renderToStaticMarkup(result)).toBe(
      renderToStaticMarkup(
        <Section id='heading1'>
          <h2>heading1</h2>
          <div className='px-0 md:px-6 lg:px-12 space-y-4'>
            <p>paragraph1</p>
            <p>paragraph2</p>
            <p>paragraph3</p>
          </div>
        </Section>,
      ),
    );
  });

  it('should wrap each set of <h2 /> and <p /> in a section', async () => {
    expect.assertions(1);

    const mdx = [
      '## heading1',
      'paragraph1',
      'paragraph2',
      '',
      '## heading2',
      'paragraph3',
    ].join('\n');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const result = await evaluate(mdx, {
      remarkPlugins: [sectionize],
    });

    expect(renderToStaticMarkup(result)).toBe(
      renderToStaticMarkup(
        <>
          <Section id='heading1'>
            <h2>heading1</h2>
            <div className='px-0 md:px-6 lg:px-12 space-y-4'>
              <p>paragraph1</p>
              <p>paragraph2</p>
            </div>
          </Section>
          <Section id='heading2'>
            <h2>heading2</h2>
            <div className='px-0 md:px-6 lg:px-12 space-y-4'>
              <p>paragraph3</p>
            </div>
          </Section>
        </>,
      ),
    );
  });
});
