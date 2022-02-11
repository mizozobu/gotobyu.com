import { Dialog, Transition } from '@headlessui/react';
import { SearchIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import {
  connectSearchBox,
  connectStats,
  connectInfiniteHits,
} from 'react-instantsearch-dom';
import { CustomPoweredBy } from '@cmp/atoms/CustomPoweredBy';
import { CustomSearchBox as _CustomSearchBox } from '@cmp/atoms/CustomSearchBox';
import { CustomStats as _CustomStats } from '@cmp/atoms/CustomStats';
import { HitItem } from '@cmp/molecules/HitItem';
import { CustomInfiniteHits as _CustomInfiniteHits } from '@cmp/organisms/CustomInfiniteHits';
import { AlgoliaProvider } from '@l/algolia';

const CustomSearchBox = connectSearchBox(_CustomSearchBox);
const CustomStats = connectStats(_CustomStats);
const CustomInfiniteHits = connectInfiniteHits(_CustomInfiniteHits);

export interface Props {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * @see https://fwywd.com/tech/next-algolia
 */
export const SearchDialog = ({ isOpen, onClose }: Props) => (
  <AlgoliaProvider>
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
        <div className='relative mx-auto flex max-h-full min-h-[50%] max-w-3xl flex-col divide-y rounded border-slate-100 bg-white lg:max-h-[76vh]'>
          <div className='flex items-center justify-end px-4 md:px-6'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor='search'>
              <SearchIcon className='h-6 w-6 text-gray-400' />
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
