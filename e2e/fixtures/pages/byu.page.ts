import { _CustomPage } from '@e/fixtures/pages/_custom.page';

/**
 * BYU page object model
 */
export class ByuPage extends _CustomPage {
  /**
   * Navigate to byu page
   */
  public async goto(): Promise<void> {
    await this.page.goto('/schools/byu');
  }

  /**
   * Take a full size screenshot
   * @returns Screenshot
   */
  public async screenshot(): Promise<Buffer> {
    return super.screenshot();
  }
}
