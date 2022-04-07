import { resolve } from 'path';
import type { Page } from '@playwright/test';
import { getEnvVar } from '@l/env';

/**
 * Resolve a given path to an absolute URL
 * @param path path
 * @returns absolute URL
 */
export const toAbsUrl = (path: string): string =>
  new URL(path, getEnvVar('NEXT_PUBLIC_BASE_URL')).href;

/**
 * Fake timers
 * @see {@link https://github.com/microsoft/playwright/issues/6347}
 * @see {@link https://github.com/sinonjs/fake-timers#var-clock--faketimersinstallconfig}
 */
export const fakeTimers = async (page: Page): Promise<void> => {
  await page.addInitScript({
    path: resolve(__dirname, '..', 'node_modules/sinon/pkg/sinon.js'),
  });
  await page.addInitScript(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.__clock = sinon.useFakeTimers({
      /**
       * Opt-in for faking API.
       * NOTE: use fake timer carefully since it may conflict with playwright page.waitForFunction.
       */
      toFake: [
        'setTimeout',
        'clearTimeout',
        // 'setImmediate',
        // 'clearImmediate',
        'setInterval',
        'clearInterval',
        // 'Date',
        // 'requestAnimationFrame',
        // 'cancelAnimationFrame',
        // 'requestIdleCallback',
        // 'cancelIdleCallback',
        // 'hrtime',
        // 'performance',
      ],
    });
  });
};

/**
 * Scroll all scrollable elements to the end both vertically and horizontally
 * @param page PlayWright page object
 * @see {@link https://stackoverflow.com/questions/34532331/finding-all-elements-with-a-scroll}
 */
export const scollAllElementsFromEndToStart = async (
  page: Page,
): Promise<void> => {
  await page.evaluate(() => {
    Array.from(document.querySelectorAll<HTMLElement>('*'))
      .filter(
        (elem) =>
          (elem.offsetWidth < elem.scrollWidth &&
            ['scroll', 'auto'].includes(
              window.getComputedStyle(elem).overflowX,
            )) ||
          (elem.offsetHeight < elem.scrollHeight &&
            ['scroll', 'auto'].includes(
              window.getComputedStyle(elem).overflowY,
            )),
      )
      .forEach((elem) => {
        elem.scrollTo({
          top: elem.scrollWidth,
          left: elem.scrollHeight,
          behavior: 'auto',
        });
        elem.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      });
  });
};

/**
 * Load lazy-load elements on the page.
 * @param page PlayWright page object
 */
export const loadLazyElements = async (page: Page): Promise<void> => {
  // zoom out to render the entire page on screen
  await page.evaluate(() => {
    document.documentElement.style.transform = 'scale(0.01)';
    document.documentElement.scrollIntoView();
  });

  await Promise.all([
    // wait for next/image to be loaded
    page.waitForFunction(() => {
      /** all images on page */
      const imageNodes = document.querySelectorAll('img');
      /** hidden slider images */
      const hiddenImageNodes = document.querySelectorAll(
        '.slick-slide:nth-of-type(n+4) img',
      );
      /**
       * loaded images
       * @see {@link https://stackoverflow.com/questions/1977871/check-if-an-image-is-loaded-no-errors-with-jquery}
       */
      const loadedImageNodes = Array.from(imageNodes).filter(
        (img) => img.complete && img.naturalWidth > 1,
      );

      return (
        loadedImageNodes.length >= imageNodes.length - hiddenImageNodes.length
      );
    }),

    // wait for next/dynamic to be loaded
    page.waitForFunction(
      () => document.querySelectorAll('[data-testid="loader"]').length === 0,
    ),
  ]);

  // zoom back in
  await page.evaluate(() => {
    document.documentElement.style.transform = 'scale(1)';
    window.scrollTo(0, 0);
  });

  // wait for browser overscroll effect to finish
  await new Promise((r) => {
    setTimeout(r, 500);
  });
};
