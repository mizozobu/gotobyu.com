import { test } from '@playwright/test';
import { toAbsUrl, toSnapshotPath } from '@e/e2e.util';

test('take screenshots', async ({ page }, testInfo) => {
  await page.goto(toAbsUrl('/tips/learn-english'));

  await page.screenshot({
    path: toSnapshotPath('init', testInfo),
    fullPage: true,
  });
});
