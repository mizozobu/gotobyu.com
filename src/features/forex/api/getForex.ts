'use server';

import 'server-only';
import { ALPHA_VANTAGE_API_KEY } from '@/config';
import { rest } from '@/lib/rest';
import type { AlphaVantageForexResponse, Forex } from '../types';

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

/**
 * Get exchange rate for USD/JPY
 * @returns Exchage rate and timestamp for USD/JPY
 */
export const getUSDtoJPY = (): Promise<Forex> => getForex('USD', 'JPY');
