import type { Page } from '@playwright/test';
import type { PageFunction } from 'playwright-core/types/structs';
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
  private readonly page: Page;

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
  public async init(path: string): Promise<void> {
    this.watchConsoleError();
    await Promise.all([injectScripts(this.page), fakeTimers(this.page)]);
    await this.goto(path);
    await loadLazyElements(this.page);
  }

  /**
   * Watch for console errors
   */
  private watchConsoleError(): void {
    this.page.on('console', (message) => {
      if (message.type() === 'error') {
        throw new Error(message.text());
      }
    });
  }

  /**
   * Navigate to a given path
   * @param path relative path
   */
  public async goto(path: string): Promise<void> {
    await this.page.goto(toAbsUrl(path));
  }

  /**
   * Returns the current playwright page object
   * @returns Page
   */
  public getPage(): Page {
    return this.page;
  }

  /**
   * Page.evaluate wrapper
   * @param pageFunction Callback to be executed
   * @param arg Args passed to the callback
   * @see {@link Page.evaluate}
   */
  public evaluate<R>(
    pageFunction: PageFunction<void, R>,
    arg?: unknown,
  ): Promise<R>;
  public evaluate<T, U>(pageFunction: PageFunction<U, T>, arg: U): Promise<T> {
    return this.page.evaluate<T, U>(pageFunction, arg);
  }

  /**
   * Take a screenshot
   * @returns Screenshot buffer
   */
  public async screenshot(): Promise<Buffer> {
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
