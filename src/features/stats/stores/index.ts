'use client';

import { atom } from 'recoil';
import type { ValuesType } from 'utility-types';

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

/**
 * Type for recoil stats state
 */
interface StatsState {
  /** Currency */
  currency: ValuesType<typeof CURRENCY>;

  /** Whether a member of the church */
  isLDS: boolean;
}

/**
 * Default state for recoil stats state
 */
const defaultStatsState: StatsState = {
  currency: CURRENCY.JPY,
  isLDS: true,
};

/**
 * Recoil stats state
 */
export const statsState = atom<StatsState>({
  key: STATS_STATE_KEY,
  default: defaultStatsState,
});
