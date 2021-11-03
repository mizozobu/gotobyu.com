export interface ForexState {
  /**
   * exchange rate JPY/USD
   */
  exrate: number;

  /**
   * datetime when exchange rate is retrieved in ISO string
   */
  timestamp: string;
}
