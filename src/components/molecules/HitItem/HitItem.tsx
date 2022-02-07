import { HashtagIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import type { MouseEventHandler } from 'react';
import { Highlight, Snippet } from 'react-instantsearch-dom';
import { getSmallestHeadingTag, ActualHit, Algoliast } from '@l/algolia';
import styles from './HitItem.module.css';

interface Props {
  hit: ActualHit<Algoliast>;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const HitItem = ({ hit, onClick }: Props) => (
  <Link href={hit.permalink}>
    <a>
      <button
        type='button'
        className='flex items-stretch w-full px-4 py-3 rounded-md bg-gray-50 hover:bg-indigo-50 text-left'
        onClick={onClick}
      >
        <div className='hidden md:flex items-center'>
          <HashtagIcon className='w-6 h-6 p-1 border border-gray-200 rounded-md mr-4 text-gray-400 bg-white' />
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
        <div className='hidden md:flex items-center'>
          <ChevronRightIcon className='w-6 h-6 p-1 ml-4 text-gray-400' />
        </div>
      </button>
    </a>
  </Link>
);
