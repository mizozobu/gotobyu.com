import { atom } from 'recoil';
import { FOREX_STATE_KEY } from './forex.constants';
import { ForexState } from './forex.interface';

/**
 * Default state for recoil forex state
 */
export const defaultForexState: ForexState = {
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
