import type { Page, TestInfo } from '@playwright/test';
import { getEnvVar } from '@l/env';

/**
 * Resolve a given path to an absolute URL
 * @param path path
 * @returns absolute URL
 */
export const toAbsUrl = (path: string): string =>
  new URL(path, getEnvVar('NEXT_PUBLIC_BASE_URL')).href;

/**
 * Return a relativep path to screenshot file
 * @param name screenshot file name
 * @param testInfo testInfo
 * @returns screenshot file path
 */
export const toSnapshotPath = (name: string, testInfo: TestInfo): string =>
  `.reg/actual/${testInfo.titlePath[0].split('.')[0]}/${name}.${
    testInfo.project.name
  }.png`;

/**
 * Load lazy-load elements on the page.
 * @param page PlayWright page object
 */
export const loadLazyElements = async (page: Page): Promise<void> => {
  await page.evaluate(() => {
    document.documentElement.style.transform = 'scale(0.01)';
    document.documentElement.scrollIntoView();
  });
  await page.waitForFunction(() => {
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
  });
  await page.evaluate(() => {
    document.documentElement.style.transform = 'scale(1)';
    window.scrollTo(0, 0);
  });
  // wait for browser overscroll effect to finish
  await new Promise((r) => {
    setTimeout(r, 500);
  });
};
