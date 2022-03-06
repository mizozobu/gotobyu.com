/**
 * Screen size
 */
export const SCREEN_SIZE = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
} as const;

/**
 * Array of possible screen sizes ordered from smallest
 */
export const SCREEN_SIZE_LIST = Object.values(SCREEN_SIZE);
