import { jest } from '@jest/globals';
import type { ScreenSize } from './media.interface';
import { mediaGte } from './media.util';

describe('mediaGte', () => {
  const windowSize = 1024;

  beforeAll(() => {
    /**
     * @see {@link https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom}
     */
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: ((query as string).match(/\d+/) ?? 0) <= windowSize,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it.each([
    { size: 'sm', expected: true },
    { size: 'md', expected: true },
    { size: 'lg', expected: true },
    { size: 'xl', expected: false },
    { size: '2xl', expected: false },
  ] as { size: ScreenSize; expected: boolean }[])(
    `should round $expected when $size <= ${windowSize}px`,
    ({ size, expected }) => {
      expect.assertions(1);

      expect(mediaGte(size)).toBe(expected);
    },
  );
});
