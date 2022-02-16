import type { ValuesType } from 'utility-types';
import { CURRENCY } from './stats.constants';

export interface StatsState {
  /**
   * currency
   */
  currency: ValuesType<typeof CURRENCY>;

  /**
   * whether a member of the church
   */
  isLDS: boolean;
}
