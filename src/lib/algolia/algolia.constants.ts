import type { BatchActionType } from '@algolia/client-search';

/**
 * Algolia app id
 */
export const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? '';

/**
 * Algolia API key
 */
export const ALGOLIA_API_KEY =
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY ?? '';

/**
 * Algolia index name
 */
export const ALGOLIA_INDEX_NAME =
  process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME ?? '';

/**
 * Array of possible heading tags
 */
export const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

/**
 * Algolia multiple batch action type
 */
export const BATCH_ACTION: { [key: string]: BatchActionType } = {
  /** addObject */
  add: 'addObject',
  /** updateObject */
  update: 'updateObject',
  /** partialUpdateObject */
  partialUpdate: 'partialUpdateObject',
  /** deleteObject */
  delete: 'deleteObject',
} as const;
