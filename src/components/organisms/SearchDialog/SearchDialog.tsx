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
        <div className='relative flex flex-col max-w-3xl min-h-[50%] max-h-full lg:max-h-[76vh] rounded divide-y border-slate-100 mx-auto bg-white'>
          <div className='flex justify-end items-center px-4 md:px-6'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor='search'>
              <SearchIcon className='w-6 h-6 text-gray-400' />
            </label>
            <CustomSearchBox
              id='search'
              className='w-full h-full py-4 mx-3'
              placeholder='検索'
              maxLength={64}
              delay={500}
            />
            <button
              type='button'
              className='p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100'
              onClick={onClose}
            >
              <XIcon className='w-6 h-6 text-gray-400' />
            </button>
          </div>
          <div className='flex flex-col grow px-4 md:px-6 py-4 space-y-2 overflow-y-auto'>
            <CustomStats />
            <CustomInfiniteHits>
              {(hit) => (
                <HitItem key={hit.objectID} hit={hit} onClick={onClose} />
              )}
            </CustomInfiniteHits>
          </div>
          <div className='flex justify-end px-4 md:px-6 py-4'>
            <CustomPoweredBy />
          </div>
        </div>
      </Dialog>
    </Transition>
  </AlgoliaProvider>
);
