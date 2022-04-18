import type { Locator, Page } from '@playwright/test';
import { _CustomPage } from '@e/fixtures/pages/_custom.page';

/**
 * Index page object model
 */
export class IndexPage extends _CustomPage {
  /** Logo */
  private logo: Locator;

  constructor(page: Page) {
    super(page);
    this.logo = this.page.locator('#animated-circulating-circles');
  }

  /**
   * Navigate to index page
   */
  public async goto(): Promise<void> {
    await this.page.goto('/');
  }

  /**
   * Tick the clock ahead to type "にはどうやって入学するの?"
   */
  public async tickUntilSentenseCompletes(): Promise<void> {
    await this.page.evaluate(async () => window.__clock.tickAsync(75 * 13));
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
