import { _CustomPage } from '@e/fixtures/pages/_custom.page';

/**
 * Career page object model
 */
export class CareerPage extends _CustomPage {
  /**
   * Navigate to career page
   */
  public async goto(): Promise<void> {
    await this.page.goto('/tips/career');
  }

  /**
   * Take a full size screenshot
   * @returns Screenshot
   */
  public async screenshot(): Promise<Buffer> {
    return super.screenshot();
  }
}
