import { _CustomPage } from '@e/fixtures/pages/_custom.page';

/**
 * BYUI page object model
 */
export class ByuiPage extends _CustomPage {
  /**
   * Navigate to byui page
   */
  public async goto(): Promise<void> {
    await this.page.goto('/schools/byui');
  }

  /**
   * Take a full size screenshot
   * @returns Screenshot
   */
  public async screenshot(): Promise<Buffer> {
    return super.screenshot();
  }
}
