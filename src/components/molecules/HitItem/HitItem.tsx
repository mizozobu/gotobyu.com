import { HashtagIcon, ChevronRightIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import Link from 'next/link';
import type { MouseEventHandler } from 'react';
import { Highlight, Snippet } from 'react-instantsearch-dom';
import type { ActualHit, Algoliast } from '@l/algolia';
import { getSmallestHeadingTag } from '@l/algolia';
import styles from './HitItem.module.css';

/**
 * Props for {@link HitItem}
 */
interface Props {
  /** Hit object */
  hit: ActualHit<Algoliast>;
  /** Click event handler */
  onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Algolia hit item
 */
export const HitItem = ({ hit, onClick }: Props): JSX.Element => (
  <Link href={hit.permalink}>
    <a tabIndex={-1}>
      <button
        type='button'
        className='flex w-full items-stretch rounded-md bg-gray-50 px-4 py-3 text-left hover:bg-indigo-50'
        onClick={onClick}
      >
        <div className='hidden items-center md:flex'>
          <HashtagIcon className='mr-4 h-6 w-6 rounded-md border border-gray-200 bg-white p-1 text-gray-400' />
        </div>
        <div className='grow'>
          <Highlight
            attribute={getSmallestHeadingTag(hit)}
            hit={hit}
            className={classNames(styles['hit-item'], 'font-bold')}
          />
          <div className='pl-4'>
            ...
            <Snippet
              attribute='content'
              hit={hit}
              className={classNames(styles['hit-item'], 'text-sm')}
            />
            ...
          </div>
        </div>
        <div className='hidden items-center md:flex'>
          <ChevronRightIcon className='ml-4 h-6 w-6 p-1 text-gray-400' />
        </div>
      </button>
    </a>
  </Link>
);
