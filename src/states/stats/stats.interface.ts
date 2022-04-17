import type { ValuesType } from 'utility-types';
import type { CURRENCY } from './stats.constants';

/**
 * Type for recoil stats state
 */
export interface StatsState {
  /** Currency */
  currency: ValuesType<typeof CURRENCY>;

  /** Whether a member of the church */
  isLDS: boolean;
}
