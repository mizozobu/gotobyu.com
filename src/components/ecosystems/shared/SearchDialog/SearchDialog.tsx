import { Dialog, Transition } from '@headlessui/react';
import { SearchIcon, XIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import { Fragment } from 'react';
import {
  connectSearchBox,
  connectStats,
  connectInfiniteHits,
  connectStateResults,
} from 'react-instantsearch-dom';
import { CustomInfiniteHits as _CustomInfiniteHits } from '@cmp/ecosystems/shared/CustomInfiniteHits';
import { CustomPoweredBy } from '@cmp/ecosystems/shared/CustomPoweredBy';
import { CustomSearchBox as _CustomSearchBox } from '@cmp/ecosystems/shared/CustomSearchBox';
import { CustomStateResults as _CustomStateResults } from '@cmp/ecosystems/shared/CustomStateResults';
import { CustomStats as _CustomStats } from '@cmp/ecosystems/shared/CustomStats';
import { HitItem } from '@cmp/molecules/HitItem';
import { AlgoliaProvider } from '@l/algolia';

const CustomSearchBox = connectSearchBox(_CustomSearchBox);
const CustomStats = connectStats(_CustomStats);
const CustomInfiniteHits = connectInfiniteHits(_CustomInfiniteHits);
const CustomStateResults = connectStateResults(_CustomStateResults);

export interface Props {
  isOpen: boolean;
  isAvailable: boolean;
  onClose: () => void;
}

/**
 * @see https://fwywd.com/tech/next-algolia
 */
export const SearchDialog = ({ isOpen, isAvailable, onClose }: Props) => (
  <AlgoliaProvider>
    <CustomStateResults />
    <Transition
      show={isOpen}
      as={Fragment}
      enter='duration-200 ease-out'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='duration-100 ease-in'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      <Dialog
        className='fixed inset-0 z-20 p-4 md:p-16 lg:p-[12vh]'
        open={isOpen}
        onClose={onClose}
      >
        <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm' />
        <div
          className={classNames(
            'relative mx-auto flex max-h-full min-h-[50%] max-w-3xl flex-col divide-y rounded border-slate-100 bg-white lg:max-h-[76vh]',
            { 'cursor-not-allowed': !isAvailable },
          )}
        >
          <div className='flex items-center justify-end px-4 md:px-6'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor='search'>
              <SearchIcon
                className={classNames(
                  'h-6 w-6',
                  isAvailable ? 'text-gray-400' : 'text-red-400',
                )}
              />
            </label>
            {isAvailable ? (
              <CustomSearchBox
                id='search'
                className='mx-3 h-full w-full py-4'
                placeholder='検索'
                maxLength={64}
                delay={500}
              />
            ) : (
              <div className='mx-3 h-full w-full py-4 text-red-400'>
                現在検索は利用できません
              </div>
            )}
            <button
              type='button'
              className='rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500'
              onClick={onClose}
            >
              <XIcon className='h-6 w-6 text-gray-400' />
            </button>
          </div>
          <div className='flex grow flex-col space-y-2 overflow-y-auto px-4 py-4 md:px-6'>
            <CustomStats />
            <CustomInfiniteHits>
              {(hit) => (
                <HitItem key={hit.objectID} hit={hit} onClick={onClose} />
              )}
            </CustomInfiniteHits>
          </div>
          <div className='flex justify-end px-4 py-4 md:px-6'>
            <CustomPoweredBy />
          </div>
        </div>
      </Dialog>
    </Transition>
  </AlgoliaProvider>
);
