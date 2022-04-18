import { _CustomPage } from '@e/fixtures/pages/_custom.page';

/**
 * Apply page object model
 */
export class ApplyPage extends _CustomPage {
  /**
   * Navigate to apply page
   */
  public async goto(): Promise<void> {
    await this.page.goto('/tips/apply');
  }

  /**
   * Take a full size screenshot
   * @returns Screenshot
   */
  public async screenshot(): Promise<Buffer> {
    return super.screenshot();
  }
}
