import type { NextApiRequest, NextApiResponse } from 'next';
import type { ValuesType } from 'utility-types';
// import {
//   BYU_PAGE_META,
//   BYUH_PAGE_META,
//   BYUI_PAGE_META,
//   COMPARE_PAGE_META,
//   APPLY_PAGE_META,
//   LEARN_ENGLISH_PAGE_META,
//   CAREER_PAGE_META,
//   INTERNSHIP_PAGE_META,
//   ABOUT_PAGE_META,
// } from '@d/links';
// import { indexDocument } from '@l/algolia/node';

/**
 * Index status
 */
const STATUS = {
  /** Indexed */
  indexed: 'indexed',
  /** Skipped */
  skipped: 'skipped',
  /** Failed */
  failed: 'failed',
} as const;
/** Time indexed at */
let indexedAt: Date | undefined;

/**
 * Index documents in algolia.
 * Allowed to be called only once.
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse<{
    status: ValuesType<typeof STATUS>;
    indexedAt: Date;
  }>,
  // eslint-disable-next-line @typescript-eslint/require-await
): Promise<void> => {
  if (indexedAt !== undefined) {
    res.setHeader('Cache-Control', 's-maxage=86400');
    res.status(200).json({
      status: STATUS.skipped,
      indexedAt,
    });
  } else {
    indexedAt = new Date();

    try {
      // await Promise.all(
      //   [
      //     BYU_PAGE_META,
      //     BYUH_PAGE_META,
      //     BYUI_PAGE_META,
      //     COMPARE_PAGE_META,
      //     APPLY_PAGE_META,
      //     LEARN_ENGLISH_PAGE_META,
      //     CAREER_PAGE_META,
      //     INTERNSHIP_PAGE_META,
      //     ABOUT_PAGE_META,
      //   ].map(({ href }) => indexDocument(href)),
      // );
      res.setHeader('Cache-Control', 's-maxage=86400');
      res.status(200).json({ status: STATUS.indexed, indexedAt });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      res.setHeader('Cache-Control', 's-maxage=86400');
      res.status(200).json({ status: STATUS.failed, indexedAt });
    }
  }
};
