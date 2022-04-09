import type { Page } from '@playwright/test';
import type { SinonFakeTimers } from 'sinon';
import {
  toAbsUrl,
  injectScripts,
  fakeTimers,
  loadLazyElements,
} from '@e/e2e.util';

declare global {
  interface Window {
    /** For sinon fake timer */
    __clock: SinonFakeTimers;
  }
}

/**
 * Page object model to capture screenshots
 */
export class ScreenshotPage {
  public readonly page: Page;

  /**
   * @constructor
   * @param page PlayWright page object
   */
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Initialize a give page for screenshot ready
   * @param path relative path
   */
  async init(path: string): Promise<void> {
    await Promise.all([injectScripts(this.page), fakeTimers(this.page)]);
    await this.goto(path);
    await loadLazyElements(this.page);
  }

  /**
   * Navigate to a given path
   * @param path relative path
   */
  async goto(path: string): Promise<void> {
    await this.page.goto(toAbsUrl(path));
  }

  /**
   * Take a screenshot
   * @returns Screenshot buffer
   */
  async screenshot(): Promise<Buffer> {
    // workaround to avoid sticking the sticky header in the middle of a page on a full-size screenshot
    await this.page.evaluate(() => {
      document
        .querySelector('[data-testid="header"]')
        ?.setAttribute('style', 'position: relative !important;');
    });

    const screenshot = await this.page.screenshot({
      fullPage: true,
      animations: 'disabled',
      mask: [this.page.locator('#animated-circulating-circles')],
    });

    // restore original style
    await this.page.evaluate(() => {
      document
        .querySelector('[data-testid="header"]')
        ?.removeAttribute('style');
    });

    return screenshot;
  }
}
