import { test, expect } from '@e/e2e.fixture';

test('visual regression test @vrt', async ({ screenshotPage }) => {
  await screenshotPage.init('/tips/apply');

  const screenshot = await screenshotPage.screenshot();

  expect(screenshot).toMatchSnapshot('init.png');
});
