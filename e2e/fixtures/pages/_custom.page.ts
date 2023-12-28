import { resolve } from 'path';
import type {
  ConsoleMessage,
  Locator,
  Page,
  PageScreenshotOptions,
} from '@playwright/test';
import type { SinonFakeTimers } from 'sinon';

declare global {
  interface Window {
    /** For sinon fake timer */
    __clock: SinonFakeTimers;
  }
}

/**
 * Page object model
 */
export abstract class _CustomPage {
  /** Page path */
  public readonly path: string = 'about:blank';
  /** Playright page object */
  protected readonly page: Page;
  /** Header */
  public header: Locator;
  /** Footer */
  public footer: Locator;
  /** Button to show search modal */
  public searchButton: Locator;
  /** Search modal */
  public searchModal: Locator;

  /**
   * @constructor
   * @param page PlayWright page object
   */
  constructor(page: Page) {
    this.page = page;
    this.header = this.page.locator('header');
    this.footer = this.page.locator('footer');
    this.searchButton = this.header.locator('button:visible', {
      hasText: '検索',
    });
    this.searchModal = this.page.getByRole('dialog', {
      name: '検索ポップアップ',
    });
  }

  /**
   * Setup a page
   */
  public async setup(): Promise<void> {
    this.watchConsoleError();
    await Promise.all([this.injectScripts(), this.fakeTimers()]);
  }

  /**
   * Console event handler
   * @param message console message
   */
  private handleConsoleError(this: void, message: ConsoleMessage): void {
    if (message.type() === 'error') {
      // eslint-disable-next-line no-console
      console.error(message.text());
      throw new Error(message.text());
    }
  }

  /**
   * Watch for console errors
   */
  public watchConsoleError(): void {
    this.page.on('console', this.handleConsoleError);
  }

  /**
   * Unwatch for console errors
   */
  public unwatchConsoleError(): void {
    this.page.off('console', this.handleConsoleError);
  }

  /**
   * Inject helper functions
   */
  public async injectScripts(): Promise<void> {
    const scriptDir = resolve(__dirname, '..', 'injected');
    await Promise.all([
      this.page.addInitScript({
        path: resolve(scriptDir, 'isVisible.js'),
      }),
      this.page.addInitScript({
        path: resolve(scriptDir, 'isInScreen.js'),
      }),
    ]);
  }

  /**
   * Fake timers
   * @see {@link https://github.com/microsoft/playwright/issues/6347}
   * @see {@link https://github.com/sinonjs/fake-timers#var-clock--faketimersinstallconfig}
   */
  public async fakeTimers(): Promise<void> {
    await this.page.addInitScript({
      path: resolve(
        __dirname,
        '..',
        '..',
        '..',
        'node_modules',
        'sinon',
        'pkg',
        'sinon.js',
      ),
    });
    await this.page.addInitScript(() => {
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
  }

  /**
   * Navigate to about page
   */
  public async goto(): Promise<void> {
    await this.page.goto(this.path);
  }

  /**
   * Load lazy-load elements on the page.
   */
  public async loadLazyElements(): Promise<void> {
    // zoom out to render the entire page on screen
    await this.page.evaluate(() => {
      document.documentElement.style.transform = 'scale(0.01)';
      document.documentElement.scrollIntoView();
    });

    await Promise.all([
      // wait for next/image to be loaded
      this.page.waitForFunction(async () => {
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
      this.page.waitForFunction(
        () => document.querySelectorAll('[data-testid="loader"]').length === 0,
      ),
    ]);

    // wait for next/image blur placeholder to disappear
    await new Promise((r) => {
      setTimeout(r, 500);
    });

    // zoom back in
    await this.page.evaluate(() => {
      document.documentElement.style.transform = 'scale(1)';
      window.scrollTo(0, 0);
    });

    // wait for browser overscroll effect to finish
    await new Promise((r) => {
      setTimeout(r, 500);
    });

    // wait for sticky header to be back
    await new Promise((r) => {
      setTimeout(r, 250);
    });
  }

  /**
   * Take a screenshot
   * @returns Screenshot buffer
   */
  public async screenshot(
    options: PageScreenshotOptions = {},
  ): Promise<Buffer> {
    const screenshot = await this.page.screenshot({
      fullPage: true,
      animations: 'disabled',
      scale: 'css',
      ...options,
    });

    return screenshot;
  }
}
