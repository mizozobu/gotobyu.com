'use client';

import { atom } from 'recoil';

/**
 * Key for recoil forex state
 */
export const FOREX_STATE_KEY = 'forex/forex' as const;

/**
 * Type for recoil forex state
 */
interface ForexState {
  /** FX rate(JPY <=> USD) */
  exrate: number;

  /** Timestamp when exchange rate is retrieved in ISO string */
  timestamp: string;
}

/**
 * Default state for recoil forex state
 */
const defaultForexState: ForexState = {
  exrate: 100,
  timestamp: new Date('1970-01-01T00:00:00').toISOString(),
};

/**
 * Recoil forex state
 */
export const forexState = atom<ForexState>({
  key: FOREX_STATE_KEY,
  default: defaultForexState,
});
