/**
 * Key for recoil stats state
 */
export const STATS_STATE_KEY = 'stats/stats' as const;

/**
 * Type for recoil stats state
 */
export const CURRENCY = {
  /** Symbol for JPY */
  JPY: Symbol('JPY'),
  /** Symbol for USD */
  USD: Symbol('USD'),
} as const;
