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
 * Use setTimeout on node.js side since browser setTimeout is mocked
 * @param page PlayWright page object
 * @param testInfo PlayWright test info object
 * @param _options extra options
 */
export const loadLazyElements = async (
  page: Page,
  testInfo: TestInfo,
  _options: {
    /** Milliseconds to wait after zooming out */
    waitAfterZoomOut?: number;
    /** Milliseconds to wait after zooming back in */
    waitAfterZoomIn?: number;
  } = {},
): Promise<void> => {
  const { waitAfterZoomOut, waitAfterZoomIn } = {
    waitAfterZoomOut: 1000,
    waitAfterZoomIn: 1000,
    ..._options,
  };
  await page.evaluate(() => {
    document.documentElement.style.transform = 'scale(0.01)';
    document.getElementById('content')?.scrollIntoView();
  });
  await new Promise((r) => {
    setTimeout(r, waitAfterZoomOut * (testInfo.retry + 1));
  });
  await page.evaluate(() => {
    document.documentElement.style.transform = 'scale(1)';
    window.scrollTo(0, 0);
  });
  await new Promise((r) => {
    setTimeout(r, waitAfterZoomIn * (testInfo.retry + 1));
  });
};
