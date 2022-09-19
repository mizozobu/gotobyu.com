import axios from 'axios';
import { ALPHA_VANTAGE_API_KEY } from '@/config';
import type { AlphaVantageForexResponse, Forex } from '../types';

/**
 * Get exchange rate from external alphavantage API
 * @param from Currency exchanged from
 * @param to Currency exchanged to
 * @returns Exchage rate and timestamp
 * @throws Throws when Exchage rate or timestamp returned from API is not valid
 */
export const getForex = async (from: string, to: string): Promise<Forex> => {
  const res = await axios.get<AlphaVantageForexResponse>(
    'https://www.alphavantage.co/query',
    {
      params: {
        function: 'FX_INTRADAY',
        from_symbol: from,
        to_symbol: to,
        interval: '60min',
        apikey: ALPHA_VANTAGE_API_KEY,
      },
    },
  );

  const [datetime, data] = Object.entries(
    res.data['Time Series FX (60min)'],
  )[0];
  const exrate = parseFloat(data['1. open']);
  if (Number.isNaN(exrate)) {
    throw new Error(`"${data['1. open']}" is not a valid number"`);
  }

  const timestamp = new Date(datetime);
  // @see https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
  if (!(timestamp instanceof Date) || Number.isNaN(timestamp)) {
    throw new Error(`"${datetime}" is not a valid timestamp"`);
  }

  return {
    exrate,
    timestamp: timestamp.toISOString(),
  };
};
