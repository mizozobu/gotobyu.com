import type { StatsProvided } from 'react-instantsearch-core';

interface Props extends StatsProvided {}

export const CustomStats = ({ nbHits }: Props) =>
  nbHits > 0 ? (
    <span className='text-sm text-gray-400'>
      検索結果{nbHits.toLocaleString()}件
    </span>
  ) : (
    <div className='flex grow justify-center items-center'>
      <span className='text-sm text-gray-400'>検索結果はありません</span>
    </div>
  );
