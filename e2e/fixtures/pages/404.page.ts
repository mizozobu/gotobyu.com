import type { Locator, Page } from '@playwright/test';
import { _CustomPage } from '@e/fixtures/pages/_custom.page';

/**
 * 404 page object model
 */
export class _404Page extends _CustomPage {
  /** Logo */
  private logo: Locator;

  constructor(page: Page) {
    super(page);
    this.logo = this.page.locator('#animated-circulating-circles');
  }

  /**
   * Navigate to 404 page
   */
  public async goto(): Promise<void> {
    await this.page.goto('/404');
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
