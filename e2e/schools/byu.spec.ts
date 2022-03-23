import { test, expect } from '@playwright/test';

test('take screenshots', async ({ page }) => {
  await page.goto('http://localhost:3000/schools/byu');

  const title = page.locator('h1');

  await expect(title).toHaveText('Brigham Young University');

  await page.screenshot({ path: 'screenshot.png' });
});
