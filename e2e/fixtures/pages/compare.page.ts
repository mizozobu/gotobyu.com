import { _CustomPage } from '@e/fixtures/pages/_custom.page';

/**
 * Compare page object model
 */
export class ComparePage extends _CustomPage {
  /**
   * Navigate to compare page
   */
  public async goto(): Promise<void> {
    await this.page.goto('/tips/compare');
  }

  /**
   * Take a full size screenshot
   * @returns Screenshot
   */
  public async screenshot(): Promise<Buffer> {
    return super.screenshot();
  }
}
