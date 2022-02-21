import type { NextApiRequest, NextApiResponse } from 'next';
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

/** whether documents are indexed */
let isIndexed = false;
/** time indexed */
let indexedAt: Date | undefined;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{
    status: 'indexed' | 'skipped' | 'failed';
    indexedAt: string;
  }>,
) => {
  if (isIndexed && indexedAt) {
    // Not Modified(no message body)
    // see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304
    res.status(304);
  } else {
    try {
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

      isIndexed = true;
      indexedAt = new Date();
      res
        .status(200)
        .json({ status: 'indexed', indexedAt: indexedAt.toISOString() });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      res
        .status(500)
        .json({ status: 'failed', indexedAt: new Date().toISOString() });
    }
  }
};

export default handler;
