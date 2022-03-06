import { atom } from 'recoil';
import { STATS_STATE_KEY, CURRENCY } from './stats.constants';
import { StatsState } from './stats.interface';

/**
 * Default state for recoil stats state
 */
export const defaultStatsState: StatsState = {
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
