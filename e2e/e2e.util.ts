import type { TestInfo, Page } from '@playwright/test';
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
 * Load lazy-load elements on the page
 * @param page PlayWright page object
 */
export const loadLazyElements = async (
  page: Page,
  options: { waitAfterZoomout?: number; waitAfterZoomIn?: number } = {},
): Promise<void> =>
  page.evaluate(async ({ waitAfterZoomout = 1000, waitAfterZoomIn = 1000 }) => {
    /** option1: load by zoom */
    document.documentElement.style.transform = 'scale(0.01)';
    document.getElementById('content')?.scrollIntoView();
    await new Promise((r) => {
      setTimeout(r, waitAfterZoomout);
    });
    document.documentElement.style.transform = 'scale(1)';
    window.scrollTo(0, 0);
    await new Promise((r) => {
      setTimeout(r, waitAfterZoomIn);
    });

    /** option 2: load by scroll */
    // const vh = Math.max(
    //   document.documentElement.clientHeight || 0,
    //   window.innerHeight || 0,
    // );

    // let i = 1;
    // while (vh * i < document.documentElement.scrollHeight) {
    //   console.log('scroll');
    //   window.scrollTo({ top: vh * i });
    //   // eslint-disable-next-line no-await-in-loop, no-promise-executor-return
    //   await new Promise((r) => setTimeout(r, 500));
    //   i += 1;
    // }
  }, options);
