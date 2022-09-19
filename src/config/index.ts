/**
 * Whether to unoptimize next/image. Server side only.
 */
export const UNOPTIMIZE_IMAGE = process.env.UNOPTIMIZE_IMAGE === 'true';

/**
 * Alpha Vantage API key. Server side only.
 */
export const ALPHA_VANTAGE_API_KEY = process.env
  .ALPHA_VANTAGE_API_KEY as string;

/**
 * NODE_ENV
 */
export const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV as string;

/**
 * Base URL
 */
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

/**
 * Google Tag Manager ID
 */
export const GOOGLE_TAG_MANAGER_ID = process.env
  .NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string;

/**
 * Algolia app ID
 */
export const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string;

/**
 * Algolia API key
 */
export const ALGOLIA_API_KEY = process.env
  .NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY as string;

/**
 * Algolia Admin API key. Server side only.
 */
export const ALGOLIA_ADMIN_API_KEY = process.env
  .ALGOLIA_ADMIN_API_KEY as string;

/**
 * Algolia index name
 */
export const ALGOLIA_INDEX_NAME = process.env
  .NEXT_PUBLIC_ALGOLIA_INDEX_NAME as string;
