import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import {
  connectSearchBox,
  connectStats,
  connectInfiniteHits,
  connectStateResults,
} from 'react-instantsearch-dom';
import { Modal } from '@/components/molecules/Modal/Modal';
import { AlgoliaProvider } from '../../providers/algolia';
import { CustomInfiniteHits as _CustomInfiniteHits } from '../CustomInfiniteHits';
import { CustomPoweredBy } from '../CustomPoweredBy';
import { CustomSearchBox as _CustomSearchBox } from '../CustomSearchBox';
import { CustomStateResults as _CustomStateResults } from '../CustomStateResults';
import { CustomStats as _CustomStats } from '../CustomStats';
import { HitItem } from '../HitItem';

const CustomSearchBox = connectSearchBox(_CustomSearchBox);
const CustomStats = connectStats(_CustomStats);
const CustomStateResults = connectStateResults(_CustomStateResults);
const CustomInfiniteHits = connectInfiniteHits(_CustomInfiniteHits);

/**
 * Props for {@link SearchDialog}
 */
export interface Props {
  /** Whether dialog is open */
  isOpen: boolean;
  /** Close dialog */
  onClose: () => void;
}

/**
 * Modal for site-wide search
 * @see {@link https://fwywd.com/tech/next-algolia}
 */
export const SearchDialog = ({ isOpen, onClose }: Props): JSX.Element => {
  const [error, setError] = useState<Error | null>();

  return (
    <AlgoliaProvider>
      <CustomStateResults onError={setError} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className='relative mx-auto flex max-h-full min-h-[50%] max-w-3xl flex-col divide-y rounded bg-white lg:max-h-[76vh]'>
          <div className='flex items-center justify-end px-4 md:px-6'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor='search'>
              <MagnifyingGlassIcon className='h-6 w-6' />
            </label>
            <CustomSearchBox
              id='search'
              className='mx-3 h-full w-full py-4'
              placeholder='検索'
              maxLength={64}
              delay={500}
            />
            <button
              type='button'
              className='rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500'
              onClick={onClose}
            >
              <XMarkIcon className='h-6 w-6 text-gray-400' />
            </button>
          </div>
          <div className='flex grow flex-col space-y-2 overflow-y-auto px-4 py-4 md:px-6'>
            {error ? (
              <div className='flex grow items-center justify-center'>
                <span className='text-sm text-red-500'>
                  検索中にエラーが発生しました
                </span>
              </div>
            ) : (
              <>
                <CustomStats />
                <CustomInfiniteHits>
                  {(hit) => (
                    <HitItem key={hit.objectID} hit={hit} onClick={onClose} />
                  )}
                </CustomInfiniteHits>
              </>
            )}
          </div>
          <div className='flex justify-end px-4 py-4 md:px-6'>
            <CustomPoweredBy />
          </div>
        </div>
      </Modal>
    </AlgoliaProvider>
  );
};
