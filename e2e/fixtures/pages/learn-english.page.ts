import { _CustomPage } from '@e/fixtures/pages/_custom.page';

/**
 * Learn English page object model
 */
export class LearnEnglishPage extends _CustomPage {
  /**
   * Navigate to learn English page
   */
  public async goto(): Promise<void> {
    await this.page.goto('/tips/learn-english');
  }

  /**
   * Take a full size screenshot
   * @returns Screenshot
   */
  public async screenshot(): Promise<Buffer> {
    return super.screenshot();
  }
}
