import classNames from 'classnames';
import type { InfiniteHitsProvided } from 'react-instantsearch-core';
import { Highlight } from 'react-instantsearch-dom';
import { classifyHits, Algoliast, ActualHit } from '@l/algolia';
import styles from './CustomInfiniteHits.module.css';

/**
 * Props for {@link CustomInfiniteHits}
 */
interface Props extends InfiniteHitsProvided<ActualHit<Algoliast>> {
  children: (hit: ActualHit<Algoliast>) => JSX.Element;
}

/**
 * Custom algolia InfiniteHits
 */
export const CustomInfiniteHits = ({
  hits,
  hasPrevious,
  hasMore,
  refinePrevious,
  refineNext,
  children,
}: Props) =>
  hits.length > 0 ? (
    <div className='flex flex-col'>
      {hasPrevious && (
        <button
          type='button'
          className='mb-4 text-sm font-bold text-indigo-700'
          onClick={refinePrevious}
        >
          さらに表示する
        </button>
      )}
      <ul className='flex flex-col space-y-5'>
        {classifyHits(hits).map(({ h1, hits: hitsInH1 }) => (
          <div key={h1} className='space-y-3'>
            {hitsInH1[0] ? (
              <Highlight
                attribute='h1'
                hit={hitsInH1[0]}
                className={classNames(styles.h1, 'text-lg font-bold')}
              />
            ) : (
              <span className='text-lg font-bold'>{h1}</span>
            )}
            <ul className='flex flex-col space-y-2 md:mx-6'>
              {hitsInH1.map((hit) => children(hit))}
            </ul>
          </div>
        ))}
      </ul>
      {hasMore && (
        <button
          type='button'
          className='mt-4 text-sm font-bold text-indigo-700'
          onClick={refineNext}
        >
          さらに表示する
        </button>
      )}
    </div>
  ) : null;
