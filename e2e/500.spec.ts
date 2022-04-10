import { test, expect } from '@e/e2e.fixture';

test('visual regression test @vrt', async ({ screenshotPage }) => {
  await screenshotPage.init('/500');

  const screenshot = await screenshotPage.screenshot();

  expect(screenshot).toMatchSnapshot('init.png');
});
