import { test, expect } from '@e2e/fixtures';

test.describe('full-text search', () => {
  test('perform full-text search and click a result', async ({
    indexPage,
    aboutPage,
    page,
  }) => {
    await indexPage.setup();
    await indexPage.goto();

    await indexPage.searchButton.click();
    await expect(indexPage.searchModal).toBeVisible();

    await page.keyboard.type('BYU Management Society Tokyo Chapter');
    await page.evaluate(async () => window.__clock.tickAsync(500)); // fire debounced event handler

    await indexPage.searchModal
      .getByRole('list')
      .first()
      .getByRole('link')
      .first()
      .click();

    await expect(indexPage.searchModal).toBeHidden();
    await expect(
      page.waitForURL((url) => new URL(url).pathname === aboutPage.path),
    ).resolves.not.toThrow();
  });
});
