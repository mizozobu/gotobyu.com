/**
 * response from https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE
 */
export interface AlphaVantageForexResponse {
  'Realtime Currency Exchange Rate': {
    '1. From_Currency Code': string;
    '2. From_Currency Name': string;
    '3. To_Currency Code': string;
    '4. To_Currency Name': string;
    '5. Exchange Rate': string;
    '6. Last Refreshed': string;
    '7. Time Zone': string;
    '8. Bid Price': string;
    '9. Ask Price': string;
  };
}

/**
 * FX rate info
 */
export interface Forex {
  exrate: number;
  timestamp: string;
}
