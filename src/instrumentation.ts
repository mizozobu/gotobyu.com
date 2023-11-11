import { NODE_ENV } from '@/config';
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
} from '@/data/links';
import { indexDocument } from '@/features/index';

export const register = (): void => {
  if (NODE_ENV === 'production') {
    const wait = 10000; // 10 seconds
    setTimeout(() => {
      void Promise.all(
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
    }, wait);
  } else {
    // eslint-disable-next-line no-console
    console.log(' \x1b[32m✓\x1b[0m Skip indexing pages');
  }
};
