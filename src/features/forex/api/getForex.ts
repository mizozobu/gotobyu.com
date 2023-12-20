import { ALPHA_VANTAGE_API_KEY } from '@/config';
import { rest } from '@/lib/rest';

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

/**
 * Get exchange rate from external alphavantage API
 * @param from Currency exchanged from
 * @param to Currency exchanged to
 * @returns Exchage rate and timestamp
 * @throws Throws when Exchage rate or timestamp returned from API is not valid
 */
export const getForex = async (from: string, to: string): Promise<Forex> => {
  const res = await rest.get<AlphaVantageForexResponse>(
    'https://www.alphavantage.co/query',
    {
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: from,
      to_currency: to,
      apikey: ALPHA_VANTAGE_API_KEY,
    },
    {
      next: { revalidate: 60 * 60 * 12 },
    },
  );

  const exrate = parseFloat(
    res.data['Realtime Currency Exchange Rate']['5. Exchange Rate'],
  );
  if (Number.isNaN(exrate)) {
    throw new Error(
      `"res.data['Realtime Currency Exchange Rate']['5. Exchange Rate']" is not a valid number. Response: ${JSON.stringify(
        res.data,
      )}"`,
    );
  }

  const timestamp = new Date(
    res.data['Realtime Currency Exchange Rate']['6. Last Refreshed'],
  );
  // see https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
  if (!(timestamp instanceof Date) || Number.isNaN(timestamp)) {
    throw new Error(
      `"res.data['Realtime Currency Exchange Rate']['6. Last Refreshed']" is not a valid timestamp. Response: ${JSON.stringify(
        res.data,
      )}"`,
    );
  }

  return {
    exrate,
    timestamp: timestamp.toISOString(),
  };
};
