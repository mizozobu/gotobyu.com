import { _CustomPage } from '@e/fixtures/pages/_custom.page';

/**
 * BYUH page object model
 */
export class ByuhPage extends _CustomPage {
  /**
   * Navigate to byuh page
   */
  public async goto(): Promise<void> {
    await this.page.goto('/schools/byuh');
  }

  /**
   * Take a full size screenshot
   * @returns Screenshot
   */
  public async screenshot(): Promise<Buffer> {
    return super.screenshot();
  }
}
