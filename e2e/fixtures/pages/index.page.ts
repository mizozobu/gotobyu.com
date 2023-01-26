import type { Locator, Page } from '@playwright/test';
import { _CustomPage } from '@e2e/fixtures/pages/_custom.page';

/**
 * Index page object model
 */
export class IndexPage extends _CustomPage {
  public readonly path: string = '/';
  /** Logo */
  private logo: Locator;

  constructor(page: Page) {
    super(page);
    this.logo = this.page.locator('#animated-circulating-circles');
  }

  /**
   * Tick the clock ahead to type "にはどうやって入学するの?"
   */
  public async tickUntilSentenseCompletes(): Promise<void> {
    await this.page.evaluate(
      async () => window.__clock.tickAsync(75 * 13 + 1000), // give room for flakiness
    );
  }

  /**
   * Take a full size screenshot
   * @returns Screenshot
   */
  public async screenshot(): Promise<Buffer> {
    return super.screenshot({
      mask: [this.logo],
    });
  }
}
