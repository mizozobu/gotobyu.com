import {
  BYU_PAGE_META,
  BYUH_PAGE_META,
  BYUI_PAGE_META,
  COMPARE_PAGE_META,
  APPLY_PAGE_META,
  LEARN_ENGLISH_PAGE_META,
  CAREER_PAGE_META,
  INTERNSHIP_PAGE_META,
  ABOUT_PAGE_META,
} from '@d/links';
import { indexDocument } from '@l/algolia/node';

/**
 * index documents in algolia on start up
 */
void (async () => {
  await Promise.all(
    [
      BYU_PAGE_META,
      BYUH_PAGE_META,
      BYUI_PAGE_META,
      COMPARE_PAGE_META,
      APPLY_PAGE_META,
      LEARN_ENGLISH_PAGE_META,
      CAREER_PAGE_META,
      INTERNSHIP_PAGE_META,
      ABOUT_PAGE_META,
    ].map(({ href }) => indexDocument(href)),
  );
})();

export function middleware() {
  // do nothing
}
