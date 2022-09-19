import { useRecoilValue } from 'recoil';
import { forexState } from '../../stores';

/**
 * FX rate annotation
 */
export const ExrateAnnotation = (): string => {
  const { exrate, timestamp } = useRecoilValue(forexState);
  const date = new Date(timestamp).toLocaleString('ja-JP', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'Asia/Tokyo',
  });

  return `${date}時点での為替レート$1=¥${exrate}で換算`;
};
