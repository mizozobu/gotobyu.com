import { resolve } from 'path';

/**
 * heading tags
 */
export const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

/**
 * absolute path to pages directory
 */
export const PAGE_BASE_PATH = resolve(__dirname, '..');
