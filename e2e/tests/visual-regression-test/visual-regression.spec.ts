import { test, expect } from '@e/fixtures';

test.describe.configure({ mode: 'parallel' });

test('/index @vrt', async ({ indexPage }) => {
  await indexPage.setup();
  await indexPage.goto();
  await indexPage.loadLazyElements();
  await indexPage.tickUntilSentenseCompletes();

  const screenshot = await indexPage.screenshot();

  expect(screenshot).toMatchSnapshot();
});

test('/about @vrt', async ({ aboutPage }) => {
  await aboutPage.setup();
  await aboutPage.goto();
  await aboutPage.loadLazyElements();

  const screenshot = await aboutPage.screenshot();

  expect(screenshot).toMatchSnapshot();
});

test('/404 @vrt', async ({ _404Page }) => {
  await _404Page.setup();
  // temporarily ignore console error for http status code 500
  _404Page.unwatchConsoleError();
  await _404Page.goto();
  _404Page.watchConsoleError();
  await _404Page.loadLazyElements();

  const screenshot = await _404Page.screenshot();

  expect(screenshot).toMatchSnapshot();
});

test('/500 @vrt', async ({ _500Page }) => {
  await _500Page.setup();
  // temporarily ignore console error for http status code 500
  _500Page.unwatchConsoleError();
  await _500Page.goto();
  _500Page.watchConsoleError();
  await _500Page.loadLazyElements();

  const screenshot = await _500Page.screenshot();

  expect(screenshot).toMatchSnapshot();
});

test('/schools/byu @vrt', async ({ byuPage }) => {
  await byuPage.setup();
  await byuPage.goto();
  await byuPage.loadLazyElements();

  const screenshot = await byuPage.screenshot();

  expect(screenshot).toMatchSnapshot();
});

test('/schools/byuh @vrt', async ({ byuhPage }) => {
  await byuhPage.setup();
  await byuhPage.goto();
  await byuhPage.loadLazyElements();

  const screenshot = await byuhPage.screenshot();

  expect(screenshot).toMatchSnapshot();
});

test('/schools/byui @vrt', async ({ byuiPage }) => {
  await byuiPage.setup();
  await byuiPage.goto();
  await byuiPage.loadLazyElements();

  const screenshot = await byuiPage.screenshot();

  expect(screenshot).toMatchSnapshot();
});

test('/tips/apply @vrt', async ({ applyPage }) => {
  await applyPage.setup();
  await applyPage.goto();
  await applyPage.loadLazyElements();

  const screenshot = await applyPage.screenshot();

  expect(screenshot).toMatchSnapshot();
});

test('/tips/career @vrt', async ({ careerPage }) => {
  await careerPage.setup();
  await careerPage.goto();
  await careerPage.loadLazyElements();

  const screenshot = await careerPage.screenshot();

  expect(screenshot).toMatchSnapshot();
});

test('/tips/compare @vrt', async ({ comparePage }) => {
  await comparePage.setup();
  await comparePage.goto();
  await comparePage.loadLazyElements();

  const screenshot = await comparePage.screenshot();

  expect(screenshot).toMatchSnapshot();
});

test('/tips/internship @vrt', async ({ internshipPage }) => {
  await internshipPage.setup();
  await internshipPage.goto();
  await internshipPage.loadLazyElements();

  const screenshot = await internshipPage.screenshot();

  expect(screenshot).toMatchSnapshot();
});

test('/tips/learn-english @vrt', async ({ learnEnglishPage }) => {
  await learnEnglishPage.setup();
  await learnEnglishPage.goto();
  await learnEnglishPage.loadLazyElements();

  const screenshot = await learnEnglishPage.screenshot();

  expect(screenshot).toMatchSnapshot();
});
