import { resolve } from 'path';

/**
 * algolia app id
 */
export const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? '';

/**
 * algolia API key
 */
export const ALGOLIA_API_KEY =
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY ?? '';

/**
 * algolia index name
 */
export const ALGOLIA_INDEX_NAME =
  process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME ?? '';

/**
 * absolute path to pages directory
 */
export const PAGE_BASE_PATH = resolve(
  process.cwd(),
  '.next',
  'server',
  'pages',
);

/**
 * heading tags
 */
export const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

/**
 * algolia multiple batch action
 */
export const BATCH_ACTION = {
  add: 'addObject',
  update: 'updateObject',
  partialUpdate: 'partialUpdateObject',
  delete: 'deleteObject',
} as const;
