import { test } from '@playwright/test';
import { toAbsUrl, toSnapshotPath, loadLazyElements } from '@e/e2e.util';

test('take screenshots', async ({ page }, testInfo) => {
  await page.goto(toAbsUrl('/tips/apply'));
  await loadLazyElements(page);

  await page.screenshot({
    path: toSnapshotPath('init', testInfo),
    fullPage: true,
    animations: 'disabled',
  });
});
