import { resolve } from 'path';
import type { Page } from '@playwright/test';

/**
 * Inject helper functions
 * @param page PlayWright page object
 */
export const injectScripts = async (page: Page): Promise<void> => {
  await Promise.all([
    page.addInitScript({
      path: resolve(__dirname, 'injected', 'isVisible.js'),
    }),
    page.addInitScript({
      path: resolve(__dirname, 'injected', 'isInScreen.js'),
    }),
  ]);
};

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
    page.waitForFunction(async () => {
      /** all images on page */
      const imageNodes = Array.from(document.querySelectorAll('img'));
      /** all visible images on page */
      const visibleImageNodes = imageNodes.filter((img) => isVisible(img));
      /** all visible images in screen on page */
      const visibleImageNodesInScreen = await filterAsync(
        visibleImageNodes,
        isInScreen,
      );
      /**
       * loaded images
       * @see {@link https://stackoverflow.com/questions/1977871/check-if-an-image-is-loaded-no-errors-with-jquery}
       * @see {@link https://github.com/vercel/next.js/blob/1ed38dd2d01d96d0105b22d4c2c579627ab91cc4/packages/next/client/image.tsx#L678}
       */
      const loadedImageNodes = visibleImageNodesInScreen.filter(
        (img) =>
          img.complete &&
          img.naturalWidth > 1 &&
          window.getComputedStyle(img).filter === 'none',
      );

      return loadedImageNodes.length === visibleImageNodesInScreen.length;
    }),

    // wait for next/dynamic to be loaded
    page.waitForFunction(
      () => document.querySelectorAll('[data-testid="loader"]').length === 0,
    ),
  ]);

  // wait for next/image blur placeholder to disappear
  await new Promise((r) => {
    setTimeout(r, 500);
  });

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
