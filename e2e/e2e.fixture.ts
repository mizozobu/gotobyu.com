import { resolve } from 'path';
import { test as base, Page } from '@playwright/test';
import type { SinonFakeTimers } from 'sinon';

declare global {
  interface Window {
    /** For sinon fake timer */
    __clock: SinonFakeTimers;
  }
}

/**
 * Type for Fixture
 */
interface Fixture {
  /** Fake timer page */
  fakeTimerPage: Page;
}

/**
 * Playwright test object with fake timer
 * @see {@link https://github.com/microsoft/playwright/issues/6347}
 */
export const test = base.extend<Fixture>({
  fakeTimerPage: async ({ page }, use) => {
    await page.addInitScript({
      path: resolve(__dirname, '..', 'node_modules/sinon/pkg/sinon.js'),
    });
    await page.addInitScript(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.__clock = sinon.useFakeTimers();
    });

    await use(page);
  },
});

export { expect } from '@playwright/test';
