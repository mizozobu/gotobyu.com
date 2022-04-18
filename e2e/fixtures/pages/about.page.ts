import { _CustomPage } from '@e/fixtures/pages/_custom.page';

/**
 * About page object model
 */
export class AboutPage extends _CustomPage {
  /**
   * Navigate to about page
   */
  public async goto(): Promise<void> {
    await this.page.goto('/about');
  }

  /**
   * Take a full size screenshot
   * @returns Screenshot
   */
  public async screenshot(): Promise<Buffer> {
    return super.screenshot();
  }
}
