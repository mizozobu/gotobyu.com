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
