/**
 * response from https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=USD&to_symbol=JPY&interval=60min
 */
export interface AlphaVantageForexResponse {
  'Meta Data': {
    '1. Information': string;
    '2. From Symbol': string;
    '3. To Symbol': string;
    '4. Last Refreshed': string;
    '5. Interval': string;
    '6. Output Size': string;
    '7. Time Zone': string;
  };
  'Time Series FX (60min)': {
    [key: string]: {
      '1. open': string;
      '2. high': string;
      '3. low': string;
      '4. close': string;
    };
  };
}

/**
 * FX rate info
 */
export interface Forex {
  exrate: number;
  timestamp: string;
}
