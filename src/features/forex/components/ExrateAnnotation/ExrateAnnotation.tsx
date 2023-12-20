import { getForex } from '@/features/forex';

/**
 * FX rate annotation
 */
export const ExrateAnnotation = async (): Promise<string> => {
  const { exrate, timestamp } = await getForex('USD', 'JPY');
  const date = new Date(timestamp).toLocaleString('ja-JP', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'Asia/Tokyo',
  });

  return `${date}時点での為替レート$1=¥${exrate}で換算`;
};
