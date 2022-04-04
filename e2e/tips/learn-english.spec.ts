import { test, expect } from '@e/e2e.fixture';
import { toAbsUrl, loadLazyElements } from '@e/e2e.util';

test('visual regression test', async ({ fakeTimerPage: page }) => {
  await page.goto(toAbsUrl('/tips/learn-english'));
  await loadLazyElements(page);

  const screenshot = await page.screenshot({
    fullPage: true,
    animations: 'disabled',
  });

  expect(screenshot).toMatchSnapshot('init.png');
});
