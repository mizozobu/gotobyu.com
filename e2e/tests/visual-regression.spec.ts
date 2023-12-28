import { test, expect } from '@e2e/fixtures';

test.describe.configure({ mode: 'parallel' });

test.describe('visual regression test', () => {
  test('/', async ({ indexPage }) => {
    await indexPage.setup();
    await indexPage.goto();
    await indexPage.loadLazyElements();
    await indexPage.tickUntilSentenseCompletes();

    const screenshot = await indexPage.screenshot();

    expect(screenshot).toMatchSnapshot();
  });

  test('/about', async ({ aboutPage }) => {
    await aboutPage.setup();
    await aboutPage.goto();
    await aboutPage.loadLazyElements();

    const screenshot = await aboutPage.screenshot();

    expect(screenshot).toMatchSnapshot();
  });

  test('/404', async ({ _404Page }) => {
    await _404Page.setup();
    // temporarily ignore console error for http status code 500
    _404Page.unwatchConsoleError();
    await _404Page.goto();
    _404Page.watchConsoleError();
    await _404Page.loadLazyElements();

    const screenshot = await _404Page.screenshot();

    expect(screenshot).toMatchSnapshot();
  });

  test('/schools/byu', async ({ byuPage }) => {
    await byuPage.setup();
    await byuPage.goto();
    await byuPage.loadLazyElements();

    const screenshot = await byuPage.screenshot();

    expect(screenshot).toMatchSnapshot();
  });

  test('/schools/byuh', async ({ byuhPage }) => {
    await byuhPage.setup();
    await byuhPage.goto();
    await byuhPage.loadLazyElements();

    const screenshot = await byuhPage.screenshot();

    expect(screenshot).toMatchSnapshot();
  });

  test('/schools/byui', async ({ byuiPage }) => {
    await byuiPage.setup();
    await byuiPage.goto();
    await byuiPage.loadLazyElements();

    const screenshot = await byuiPage.screenshot();

    expect(screenshot).toMatchSnapshot();
  });

  test('/tips/apply', async ({ applyPage }) => {
    await applyPage.setup();
    await applyPage.goto();
    await applyPage.loadLazyElements();

    const screenshot = await applyPage.screenshot();

    expect(screenshot).toMatchSnapshot();
  });

  test('/tips/career', async ({ careerPage }) => {
    await careerPage.setup();
    await careerPage.goto();
    await careerPage.loadLazyElements();

    const screenshot = await careerPage.screenshot();

    expect(screenshot).toMatchSnapshot();
  });

  test('/tips/compare', async ({ comparePage }) => {
    await comparePage.setup();
    await comparePage.goto();
    await comparePage.loadLazyElements();

    const screenshot = await comparePage.screenshot();

    expect(screenshot).toMatchSnapshot();
  });

  test('/tips/internship', async ({ internshipPage }) => {
    await internshipPage.setup();
    await internshipPage.goto();
    await internshipPage.loadLazyElements();

    const screenshot = await internshipPage.screenshot();

    expect(screenshot).toMatchSnapshot();
  });

  test('/tips/learn-english', async ({ learnEnglishPage }) => {
    await learnEnglishPage.setup();
    await learnEnglishPage.goto();
    await learnEnglishPage.loadLazyElements();

    const screenshot = await learnEnglishPage.screenshot();

    expect(screenshot).toMatchSnapshot();
  });
});
