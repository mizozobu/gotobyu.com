import type { StatsProvided } from 'react-instantsearch-core';

/**
 * Props for CustomStats
 */
interface Props extends StatsProvided {}

/**
 * Custom algolia Stats
 */
export const CustomStats = ({ nbHits }: Props) =>
  nbHits > 0 ? (
    <span className='text-sm text-gray-400'>
      検索結果{nbHits.toLocaleString()}件
    </span>
  ) : (
    <div className='flex grow items-center justify-center'>
      <span className='text-sm text-gray-400'>検索結果はありません</span>
    </div>
  );
