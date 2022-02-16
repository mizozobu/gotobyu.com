import { atom } from 'recoil';
import { STATS_STATE_KEY, CURRENCY } from './stats.constants';
import { StatsState } from './stats.interface';

export const defaultStatsState: StatsState = {
  currency: CURRENCY.JPY,
  isLDS: true,
};

export const statsState = atom<StatsState>({
  key: STATS_STATE_KEY,
  default: defaultStatsState,
});
