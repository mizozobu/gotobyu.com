import { test, expect } from '@e/e2e.fixture';
import { toAbsUrl, loadLazyElements } from '@e/e2e.util';

test('visual regression test', async ({ fakeTimerPage: page }, testInfo) => {
  await page.goto(toAbsUrl('/about'));
  await loadLazyElements(page, testInfo);

  const screenshot = await page.screenshot({
    fullPage: true,
    animations: 'disabled',
  });

  expect(screenshot).toMatchSnapshot('init.png');
});
