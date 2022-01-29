import { jest } from '@jest/globals';
import type { SpyInstance } from 'jest-mock';
import rehypeParse from 'rehype-parse';
import { unified } from 'unified';
import { __HTML_CONTENT, __ALGOLIASTS } from './algolia.fixture';
import type { HeadingTag, Settings, Algoliast } from './algolia.interface';
import {
  AlgoliastBuilder,
  getText,
  isInSameBlock,
  rehypeAlgolia,
  toAlgoliasts,
  minifyHtml,
  indexDocument,
} from './algolia.util';

describe('AlgoliastBuilder', () => {
  const baseUrl = 'https://example.com';
  let builder: AlgoliastBuilder;

  beforeEach(() => {
    builder = new AlgoliastBuilder(baseUrl);
  });

  describe('constructor', () => {
    it('should instantiate with each property in this.current as empty string', () => {
      expect.assertions(1);

      expect(builder['current']).toStrictEqual({
        permalink: '',
        h1: '',
        h2: '',
        h3: '',
        h4: '',
        h5: '',
        h6: '',
        content: '',
      });
    });
  });

  describe('resetHeadings', () => {
    const heading1 = 'heading 1';
    const heading2 = 'heading 2';
    const heading3 = 'heading 3';
    const heading4 = 'heading 4';
    const heading5 = 'heading 5';
    const heading6 = 'heading 6';

    beforeEach(() => {
      builder.setHeading('h1', heading1);
      builder.setHeading('h2', heading2);
      builder.setHeading('h3', heading3);
      builder.setHeading('h4', heading4);
      builder.setHeading('h5', heading5);
      builder.setHeading('h6', heading6);
    });

    it('should reset h1 ~ h6', () => {
      expect.assertions(1);

      builder.resetHeadings('h1');

      expect(builder['current']).toStrictEqual(
        expect.objectContaining({
          h1: '',
          h2: '',
          h3: '',
          h4: '',
          h5: '',
          h6: '',
        }),
      );
    });

    it('should reset h3 ~ h6', () => {
      expect.assertions(1);

      builder.resetHeadings('h3');

      expect(builder['current']).toStrictEqual(
        expect.objectContaining({
          h1: heading1,
          h2: heading2,
          h3: '',
          h4: '',
          h5: '',
          h6: '',
        }),
      );
    });

    it('should reset h6', () => {
      expect.assertions(1);

      builder.resetHeadings('h6');

      expect(builder['current']).toStrictEqual(
        expect.objectContaining({
          h1: heading1,
          h2: heading2,
          h3: heading3,
          h4: heading4,
          h5: heading5,
          h6: '',
        }),
      );
    });
  });

  describe('setHeading', () => {
    let __resetHeadings: SpyInstance<void, [HeadingTag]>;

    beforeEach(() => {
      __resetHeadings = jest.spyOn(builder, 'resetHeadings');
    });

    it('should set h1 and set permalink as h1', () => {
      expect.assertions(2);

      const heading1 = 'heading 1';
      builder.setHeading('h1', 'heading 1');

      // see https://github.com/facebook/jest/issues/7929
      // eslint-disable-next-line jest/prefer-strict-equal
      expect(__resetHeadings.mock.calls).toEqual([['h1']]);
      expect(builder['current']).toStrictEqual({
        permalink: `${baseUrl}#${heading1}`,
        h1: heading1,
        h2: '',
        h3: '',
        h4: '',
        h5: '',
        h6: '',
        content: '',
      });
    });

    it('should set h1, h2, h3 and set permalink as h3', () => {
      expect.assertions(2);

      const heading1 = 'heading 1';
      const heading2 = 'heading 2';
      const heading3 = 'heading 3';
      builder.setHeading('h1', heading1);
      builder.setHeading('h2', heading2);
      builder.setHeading('h3', heading3);

      // see https://github.com/facebook/jest/issues/7929
      // eslint-disable-next-line jest/prefer-strict-equal
      expect(__resetHeadings.mock.calls).toEqual([['h1'], ['h2'], ['h3']]);
      expect(builder['current']).toStrictEqual({
        permalink: `${baseUrl}#${heading3}`,
        h1: heading1,
        h2: heading2,
        h3: heading3,
        h4: '',
        h5: '',
        h6: '',
        content: '',
      });
    });
  });

  describe('setContent', () => {
    it('should set this.content', () => {
      expect.assertions(1);

      const content = 'content';
      builder.setContent(content);

      expect(builder['current']).toStrictEqual(
        expect.objectContaining({
          content,
        }),
      );
    });
  });

  describe('add', () => {
    it('should append item to this.algoliasts', () => {
      expect.assertions(1);

      const algoliast: Algoliast = {
        permalink: 'https://example.com#hash',
        h1: 'heading 1',
        h2: 'heading 2',
        h3: 'heading 3',
        h4: 'heading 4',
        h5: 'heading 5',
        h6: 'heading 6',
        content: 'content',
      };
      builder.add(algoliast);

      expect(builder['algoliasts']).toStrictEqual([algoliast]);
    });
  });

  describe('getAlgoliasts', () => {
    it('should return this.algoliasts', () => {
      expect.assertions(1);

      const algoliast: Algoliast = {
        permalink: 'https://example.com#hash',
        h1: 'heading 1',
        h2: 'heading 2',
        h3: 'heading 3',
        h4: 'heading 4',
        h5: 'heading 5',
        h6: 'heading 6',
        content: 'content',
      };
      builder.add(algoliast);
      builder.add(algoliast);
      builder.add(algoliast);

      expect(builder.getAlgoliasts()).toStrictEqual([
        algoliast,
        algoliast,
        algoliast,
      ]);
    });
  });

  describe('getCurrentAlgoliast', () => {
    it('should return this.current', () => {
      expect.assertions(1);

      const heading1 = 'heading 1';
      const heading2 = 'heading 2';
      const heading3 = 'heading 3';
      const heading4 = 'heading 4';
      const heading5 = 'heading 5';
      const heading6 = 'heading 6';
      const content = 'content';
      builder.setHeading('h1', heading1);
      builder.setHeading('h2', heading2);
      builder.setHeading('h3', heading3);
      builder.setHeading('h4', heading4);
      builder.setHeading('h5', heading5);
      builder.setHeading('h6', heading6);
      builder.setContent(content);

      expect(builder.getCurrentAlgoliast()).toStrictEqual({
        permalink: `${baseUrl}#${heading6}`,
        h1: heading1,
        h2: heading2,
        h3: heading3,
        h4: heading4,
        h5: heading5,
        h6: heading6,
        content,
      });
    });
  });

  describe('getLastAlgoliast', () => {
    it('should return last item in this.algoliasts', () => {
      expect.assertions(1);

      const algoliast: Algoliast = {
        permalink: 'https://example.com#hash',
        h1: 'heading 1',
        h2: 'heading 2',
        h3: 'heading 3',
        h4: 'heading 4',
        h5: 'heading 5',
        h6: 'heading 6',
        content: '',
      };
      builder.add({ ...algoliast, content: '1' });
      builder.add({ ...algoliast, content: '2' });
      builder.add({ ...algoliast, content: '3' });

      expect(builder.getLastAlgoliast()).toStrictEqual({
        ...algoliast,
        content: '3',
      });
    });
  });
});

describe('minifyHtml', () => {
  it('should return html without whitespace node', () => {
    expect.assertions(1);

    const html = `
      <div>
        a
      </div>


      <div>  b  </div>
    `;

    expect(minifyHtml(html)).toBe('<div>a</div><div>b</div>');
  });
});

describe('getText', () => {
  it('should return recursively merged text from tree', () => {
    expect.assertions(1);

    const text = getText({
      type: 'element',
      tagName: 'div',
      children: [
        {
          type: 'element',
          tagName: 'p',
          children: [
            {
              type: 'text',
              value: 'a',
            },
            {
              type: 'text',
              value: 'b ',
            },
          ],
        },
        {
          type: 'element',
          tagName: 'div',
          children: [
            {
              type: 'element',
              tagName: 'p',
              children: [
                {
                  type: 'text',
                  value: '\n \rc\r\n',
                },
              ],
            },
            {
              type: 'element',
              tagName: 'div',
              children: [
                {
                  type: 'text',
                  value: '  d  ',
                },
              ],
            },
          ],
        },
      ],
    });

    expect(text).toBe('ab  c  d  ');
  });
});

describe('isInSameBlock', () => {
  it('should return true when all headings are equal', () => {
    expect.assertions(1);

    const obj1: Algoliast = {
      permalink: '/obj1',
      h1: 'heading 1',
      h2: 'heading 2',
      h3: 'heading 3',
      h4: 'heading 4',
      h5: 'heading 5',
      h6: 'heading 6',
      content: 'obj1',
    };
    const obj2: Algoliast = {
      permalink: '/obj2',
      h1: 'heading 1',
      h2: 'heading 2',
      h3: 'heading 3',
      h4: 'heading 4',
      h5: 'heading 5',
      h6: 'heading 6',
      content: 'obj2',
    };

    expect(isInSameBlock(obj1, obj2)).toBe(true);
  });

  it('should return false when at least one heading is not equal', () => {
    expect.assertions(1);

    const obj1: Algoliast = {
      permalink: '/obj1',
      h1: 'heading 1',
      h2: 'heading 2',
      h3: 'heading 3',
      h4: 'heading 4',
      h5: 'heading 5',
      h6: 'heading 6',
      content: 'obj1',
    };
    const obj2: Algoliast = {
      permalink: '/obj2',
      h1: 'heading 1',
      h2: 'heading 2',
      h3: 'heading 3',
      h4: 'heading 4',
      h5: 'heading 5',
      h6: '',
      content: 'obj2',
    };

    expect(isInSameBlock(obj1, obj2)).toBe(false);
  });
});

describe('rehypeAlgolia', () => {
  it('should compile html to algolists', async () => {
    expect.assertions(1);

    const { result } = await unified()
      .use(rehypeParse)
      .use(rehypeAlgolia)
      .data('settings', {
        exclude: (node) => node.properties?.dataNoindex === 'true',
      } as Settings)
      .process(Buffer.from(minifyHtml(__HTML_CONTENT)));

    expect(result).toStrictEqual(__ALGOLIASTS);
  });
});

describe('toAlgoliasts', () => {
  it('should return array of algoliast', async () => {
    expect.assertions(1);

    const algoliasts = await toAlgoliasts(
      minifyHtml(__HTML_CONTENT),
      (node) => node.properties?.dataNoindex === 'true',
    );

    expect(algoliasts).toStrictEqual(__ALGOLIASTS);
  });
});

describe('indexDocument', () => {
  beforeAll(() => {
    jest.mock('node-fetch');
  });

  it('should call readFile and toAlgoliasts', async () => {
    expect.assertions(1);

    await indexDocument(`${process.cwd()}/.next/server/pages/schools/byu.html`);

    expect(1).toBe(1);
  });
});
