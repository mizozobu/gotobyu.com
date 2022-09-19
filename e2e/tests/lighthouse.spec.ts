import lighthouse from 'lighthouse';
import { test, expect } from '@e2e/fixtures';

test.use({
  launchOptions: {
    args: ['--remote-debugging-port=9222'],
  },
});

test.describe('lighthouse', () => {
  // eslint-disable-next-line playwright/no-skipped-test
  test.skip(
    ({ browserName }) => browserName !== 'chromium',
    'lighthouse must be run on chromium',
  );

  test('/', async ({ indexPage, baseURL }) => {
    const runnerResult = await lighthouse(
      new URL(indexPage.path, baseURL).href,
      {
        logLevel: 'error',
      },
    );

    expect(
      (runnerResult.lhr.categories.performance.score as number) * 100,
    ).toBeGreaterThanOrEqual(80);
    expect(
      (runnerResult.lhr.categories.accessibility.score as number) * 100,
    ).toBe(100);
    expect(
      (runnerResult.lhr.categories['best-practices'].score as number) * 100,
    ).toBe(100);
    expect((runnerResult.lhr.categories.seo.score as number) * 100).toBe(100);
    expect(
      (runnerResult.lhr.categories.pwa.score as number) * 100,
    ).toBeGreaterThanOrEqual(70);
  });

  test('/about', async ({ aboutPage, baseURL }) => {
    const runnerResult = await lighthouse(
      new URL(aboutPage.path, baseURL).href,
      {
        logLevel: 'error',
      },
    );

    expect(
      (runnerResult.lhr.categories.performance.score as number) * 100,
    ).toBeGreaterThanOrEqual(80);
    expect(
      (runnerResult.lhr.categories.accessibility.score as number) * 100,
    ).toBe(100);
    expect(
      (runnerResult.lhr.categories['best-practices'].score as number) * 100,
    ).toBe(100);
    expect((runnerResult.lhr.categories.seo.score as number) * 100).toBe(100);
    expect(
      (runnerResult.lhr.categories.pwa.score as number) * 100,
    ).toBeGreaterThanOrEqual(70);
  });

  test('/schools/byu', async ({ byuPage, baseURL }) => {
    const runnerResult = await lighthouse(new URL(byuPage.path, baseURL).href, {
      logLevel: 'error',
    });

    expect(
      (runnerResult.lhr.categories.performance.score as number) * 100,
    ).toBeGreaterThanOrEqual(50);
    expect(
      (runnerResult.lhr.categories.accessibility.score as number) * 100,
    ).toBe(100);
    expect(
      (runnerResult.lhr.categories['best-practices'].score as number) * 100,
    ).toBe(100);
    expect((runnerResult.lhr.categories.seo.score as number) * 100).toBe(100);
    expect(
      (runnerResult.lhr.categories.pwa.score as number) * 100,
    ).toBeGreaterThanOrEqual(70);
  });

  test('/schools/byuh', async ({ byuhPage, baseURL }) => {
    const runnerResult = await lighthouse(
      new URL(byuhPage.path, baseURL).href,
      {
        logLevel: 'error',
      },
    );

    expect(
      (runnerResult.lhr.categories.performance.score as number) * 100,
    ).toBeGreaterThanOrEqual(50);
    expect(
      (runnerResult.lhr.categories.accessibility.score as number) * 100,
    ).toBe(100);
    expect(
      (runnerResult.lhr.categories['best-practices'].score as number) * 100,
    ).toBe(100);
    expect((runnerResult.lhr.categories.seo.score as number) * 100).toBe(100);
    expect(
      (runnerResult.lhr.categories.pwa.score as number) * 100,
    ).toBeGreaterThanOrEqual(70);
  });

  test('/schools/byui', async ({ byuiPage, baseURL }) => {
    const runnerResult = await lighthouse(
      new URL(byuiPage.path, baseURL).href,
      {
        logLevel: 'error',
      },
    );

    expect(
      (runnerResult.lhr.categories.performance.score as number) * 100,
    ).toBeGreaterThanOrEqual(50);
    expect(
      (runnerResult.lhr.categories.accessibility.score as number) * 100,
    ).toBe(100);
    expect(
      (runnerResult.lhr.categories['best-practices'].score as number) * 100,
    ).toBe(100);
    expect((runnerResult.lhr.categories.seo.score as number) * 100).toBe(100);
    expect(
      (runnerResult.lhr.categories.pwa.score as number) * 100,
    ).toBeGreaterThanOrEqual(60); // somehow 60
  });

  test('/tips/apply', async ({ applyPage, baseURL }) => {
    const runnerResult = await lighthouse(
      new URL(applyPage.path, baseURL).href,
      {
        logLevel: 'error',
      },
    );

    expect(
      (runnerResult.lhr.categories.performance.score as number) * 100,
    ).toBeGreaterThanOrEqual(70);
    expect(
      (runnerResult.lhr.categories.accessibility.score as number) * 100,
    ).toBe(100);
    expect(
      (runnerResult.lhr.categories['best-practices'].score as number) * 100,
    ).toBe(100);
    expect((runnerResult.lhr.categories.seo.score as number) * 100).toBe(100);
    expect(
      (runnerResult.lhr.categories.pwa.score as number) * 100,
    ).toBeGreaterThanOrEqual(70);
  });

  test('/tips/career', async ({ careerPage, baseURL }) => {
    const runnerResult = await lighthouse(
      new URL(careerPage.path, baseURL).href,
      {
        logLevel: 'error',
      },
    );

    expect(
      (runnerResult.lhr.categories.performance.score as number) * 100,
    ).toBeGreaterThanOrEqual(70);
    expect(
      (runnerResult.lhr.categories.accessibility.score as number) * 100,
    ).toBe(100);
    expect(
      (runnerResult.lhr.categories['best-practices'].score as number) * 100,
    ).toBe(100);
    expect((runnerResult.lhr.categories.seo.score as number) * 100).toBe(100);
    expect(
      (runnerResult.lhr.categories.pwa.score as number) * 100,
    ).toBeGreaterThanOrEqual(70);
  });

  test('/tips/compare', async ({ comparePage, baseURL }) => {
    const runnerResult = await lighthouse(
      new URL(comparePage.path, baseURL).href,
      {
        logLevel: 'error',
      },
    );

    expect(
      (runnerResult.lhr.categories.performance.score as number) * 100,
    ).toBeGreaterThanOrEqual(70);
    expect(
      (runnerResult.lhr.categories.accessibility.score as number) * 100,
    ).toBe(100);
    expect(
      (runnerResult.lhr.categories['best-practices'].score as number) * 100,
    ).toBe(100);
    expect((runnerResult.lhr.categories.seo.score as number) * 100).toBe(100);
    expect(
      (runnerResult.lhr.categories.pwa.score as number) * 100,
    ).toBeGreaterThanOrEqual(70);
  });

  test('/tips/internship', async ({ internshipPage, baseURL }) => {
    const runnerResult = await lighthouse(
      new URL(internshipPage.path, baseURL).href,
      {
        logLevel: 'error',
      },
    );

    expect(
      (runnerResult.lhr.categories.performance.score as number) * 100,
    ).toBeGreaterThanOrEqual(70);
    expect(
      (runnerResult.lhr.categories.accessibility.score as number) * 100,
    ).toBe(100);
    expect(
      (runnerResult.lhr.categories['best-practices'].score as number) * 100,
    ).toBe(100);
    expect((runnerResult.lhr.categories.seo.score as number) * 100).toBe(100);
    expect(
      (runnerResult.lhr.categories.pwa.score as number) * 100,
    ).toBeGreaterThanOrEqual(70);
  });

  test('/tips/learn-english', async ({ learnEnglishPage, baseURL }) => {
    const runnerResult = await lighthouse(
      new URL(learnEnglishPage.path, baseURL).href,
      {
        logLevel: 'error',
      },
    );

    expect(
      (runnerResult.lhr.categories.performance.score as number) * 100,
    ).toBeGreaterThanOrEqual(70);
    expect(
      (runnerResult.lhr.categories.accessibility.score as number) * 100,
    ).toBe(100);
    expect(
      (runnerResult.lhr.categories['best-practices'].score as number) * 100,
    ).toBe(100);
    expect((runnerResult.lhr.categories.seo.score as number) * 100).toBe(100);
    expect(
      (runnerResult.lhr.categories.pwa.score as number) * 100,
    ).toBeGreaterThanOrEqual(70);
  });
});
