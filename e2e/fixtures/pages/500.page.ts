import type { Locator, Page } from '@playwright/test';
import { _CustomPage } from '@e/fixtures/pages/_custom.page';

/**
 * 500 page object model
 */
export class _500Page extends _CustomPage {
  /** Logo */
  private logo: Locator;

  constructor(page: Page) {
    super(page);
    this.logo = this.page.locator('#animated-circulating-circles');
  }

  /**
   * Navigate to 500 page
   */
  public async goto(): Promise<void> {
    await this.page.goto('/500');
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
