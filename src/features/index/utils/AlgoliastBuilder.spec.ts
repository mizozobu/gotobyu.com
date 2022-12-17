import { jest } from '@jest/globals';
import type { SpyInstance } from 'jest-mock';
import type { Algoliast } from '@/features/search';
import { AlgoliastBuilder } from './AlgoliastBuilder';

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
        _tags: [baseUrl],
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

      builder['resetHeadings']('h1');

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

      builder['resetHeadings']('h3');

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

      builder['resetHeadings']('h6');

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
    let __resetHeadings: SpyInstance<typeof builder['resetHeadings']>;

    beforeEach(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
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
        _tags: [baseUrl],
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
        _tags: [baseUrl],
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
        _tags: ['https://example.com'],
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
        _tags: ['https://example.com'],
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
        _tags: [baseUrl],
      });
    });
  });

  describe('getLastAlgoliast', () => {
    it('should return last item in this.algoliasts', () => {
      expect.assertions(1);

      const baseAlgoliast: Algoliast = {
        permalink: 'https://example.com#hash',
        h1: 'heading 1',
        h2: 'heading 2',
        h3: 'heading 3',
        h4: 'heading 4',
        h5: 'heading 5',
        h6: 'heading 6',
        content: '',
        _tags: ['https://example.com'],
      };
      const algoliast1 = { ...baseAlgoliast, content: '1' };
      const algoliast2 = { ...baseAlgoliast, content: '2' };
      const algoliast3 = { ...baseAlgoliast, content: '3' };
      builder.add(algoliast1);
      builder.add(algoliast2);
      builder.add(algoliast3);

      expect(builder.getLastAlgoliast()).toStrictEqual(algoliast3);
    });
  });
});
