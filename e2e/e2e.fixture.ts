import { test as base } from '@playwright/test';
import { ScreenshotPage } from '@e/ScreenshotPage';

/**
 * Type for Fixture
 */
interface Fixtures {
  /** Page object model to capture screenshots */
  screenshotPage: ScreenshotPage;
}

/**
 * Custom test
 */
export const test = base.extend<Fixtures>({
  screenshotPage: async ({ page }, use) => {
    await use(new ScreenshotPage(page));
  },
});

export { expect } from '@playwright/test';
