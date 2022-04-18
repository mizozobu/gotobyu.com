import { _CustomPage } from '@e/fixtures/pages/_custom.page';

/**
 * Internship page object model
 */
export class InternshipPage extends _CustomPage {
  /**
   * Navigate to internship page
   */
  public async goto(): Promise<void> {
    await this.page.goto('/tips/internship');
  }

  /**
   * Take a full size screenshot
   * @returns Screenshot
   */
  public async screenshot(): Promise<Buffer> {
    return super.screenshot();
  }
}
