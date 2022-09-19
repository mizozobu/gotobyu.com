import type { Locator, Page } from '@playwright/test';
import { _CustomPage } from '@e2e/fixtures/pages/_custom.page';

/**
 * 404 page object model
 */
export class _404Page extends _CustomPage {
  public readonly path: string = '/404';
  /** Logo */
  private logo: Locator;

  constructor(page: Page) {
    super(page);
    this.logo = this.page.locator('#animated-circulating-circles');
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
