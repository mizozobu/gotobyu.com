import { test as base } from '@playwright/test';
import { _404Page } from '@e/fixtures/pages/404.page';
import { _500Page } from '@e/fixtures/pages/500.page';
import { AboutPage } from '@e/fixtures/pages/about.page';
import { ApplyPage } from '@e/fixtures/pages/apply.page';
import { ByuPage } from '@e/fixtures/pages/byu.page';
import { ByuhPage } from '@e/fixtures/pages/byuh.page';
import { ByuiPage } from '@e/fixtures/pages/byui.page';
import { CareerPage } from '@e/fixtures/pages/career.page';
import { ComparePage } from '@e/fixtures/pages/compare.page';
import { IndexPage } from '@e/fixtures/pages/index.page';
import { InternshipPage } from '@e/fixtures/pages/internship.page';
import { LearnEnglishPage } from '@e/fixtures/pages/learn-english.page';

/**
 * Type for Fixture
 */
interface Fixtures {
  /** 404 page object model */
  _404Page: _404Page;
  /** 500 page object model */
  _500Page: _500Page;
  /** About page object model */
  aboutPage: AboutPage;
  /** Apply page object model */
  applyPage: ApplyPage;
  /** Career page object model */
  careerPage: CareerPage;
  /** Compare page object model */
  comparePage: ComparePage;
  /** BYU page object model */
  byuPage: ByuPage;
  /** BYUH page object model */
  byuhPage: ByuhPage;
  /** BYUI page object model */
  byuiPage: ByuiPage;
  /** Index page object model */
  indexPage: IndexPage;
  /** Internship page object model */
  internshipPage: InternshipPage;
  /** Learn English page object model */
  learnEnglishPage: LearnEnglishPage;
}

/**
 * Test with fixtures
 */
export const test = base.extend<Fixtures>({
  _404Page: async ({ page }, use) => {
    await use(new _404Page(page));
  },
  _500Page: async ({ page }, use) => {
    await use(new _500Page(page));
  },
  aboutPage: async ({ page }, use) => {
    await use(new AboutPage(page));
  },
  applyPage: async ({ page }, use) => {
    await use(new ApplyPage(page));
  },
  careerPage: async ({ page }, use) => {
    await use(new CareerPage(page));
  },
  comparePage: async ({ page }, use) => {
    await use(new ComparePage(page));
  },
  byuPage: async ({ page }, use) => {
    await use(new ByuPage(page));
  },
  byuhPage: async ({ page }, use) => {
    await use(new ByuhPage(page));
  },
  byuiPage: async ({ page }, use) => {
    await use(new ByuiPage(page));
  },
  indexPage: async ({ page }, use) => {
    await use(new IndexPage(page));
  },
  internshipPage: async ({ page }, use) => {
    await use(new InternshipPage(page));
  },
  learnEnglishPage: async ({ page }, use) => {
    await use(new LearnEnglishPage(page));
  },
});

export { expect } from '@playwright/test';
