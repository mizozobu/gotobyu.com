import axios from 'axios';
import { AlphaVantageForexResponse, Forex } from './forex.interface';

/**
 * get exchange rate
 *
 * @returns exchage rate
 */
export const getForex = async (from: string, to: string): Promise<Forex> => {
  const res = await axios.get<AlphaVantageForexResponse>(
    'https://www.alphavantage.co/query',
    {
      params: {
        function: 'CURRENCY_EXCHANGE_RATE',
        from_currency: from,
        to_currency: to,
        apikey: process.env.ALPHA_VANTAGE_API_KEY,
      },
    },
  );

  const exrate = parseFloat(
    res.data['Realtime Currency Exchange Rate']['5. Exchange Rate'],
  );
  if (Number.isNaN(exrate)) {
    throw new Error(
      `"${res.data['Realtime Currency Exchange Rate']['5. Exchange Rate']}" is not a valid number"`,
    );
  }

  const timestamp = new Date(
    res.data['Realtime Currency Exchange Rate']['6. Last Refreshed'],
  );
  // see https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
  if (!(timestamp instanceof Date) || Number.isNaN(timestamp)) {
    throw new Error(
      `"${res.data['Realtime Currency Exchange Rate']['6. Last Refreshed']}" is not a valid timestamp"`,
    );
  }

  return {
    exrate,
    timestamp: timestamp.toISOString(),
  };
};
