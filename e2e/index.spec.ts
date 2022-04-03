import { test, expect } from '@e/e2e.fixture';
import { toAbsUrl, loadLazyElements } from '@e/e2e.util';

test('visual regression test', async ({
  fakeTimerPage: page,
  browserName,
}, testInfo) => {
  await page.goto(toAbsUrl('/'));
  await loadLazyElements(page, testInfo);
  // tick the clock ahead to type "にはどうやって入学するの?"
  await page.evaluate(async () => window.__clock.tickAsync(75 * 13));

  const screenshot = await page.screenshot({
    fullPage: true,
    animations: 'disabled',
    mask:
      browserName === 'webkit' // FIXME: workaround for addInitScript bug for WebKit
        ? [page.locator('#animated-circulating-circles')]
        : undefined,
  });

  expect(screenshot).toMatchSnapshot('init.png');
});
