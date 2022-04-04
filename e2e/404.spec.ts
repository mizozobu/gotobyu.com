import { test, expect } from '@e/e2e.fixture';
import { toAbsUrl, loadLazyElements } from '@e/e2e.util';

test('visual regression test', async ({ fakeTimerPage: page, browserName }) => {
  await page.goto(toAbsUrl('/404'));
  await loadLazyElements(page);

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
