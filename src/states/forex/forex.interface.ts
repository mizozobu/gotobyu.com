/**
 * Type for recoil forex state
 */
export interface ForexState {
  /** FX rate(JPY <=> USD) */
  exrate: number;

  /** Timestamp when exchange rate is retrieved in ISO string */
  timestamp: string;
}
