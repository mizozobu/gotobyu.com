import { SearchIcon, XIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import {
  connectSearchBox,
  connectStats,
  connectInfiniteHits,
  connectStateResults,
} from 'react-instantsearch-dom';
import { HitItem } from '@c/molecules/HitItem';
import { Modal } from '@c/molecules/Modal/Modal';
import { CustomInfiniteHits as _CustomInfiniteHits } from '@c/organisms/CustomInfiniteHits';
import { CustomPoweredBy } from '@c/organisms/CustomPoweredBy';
import { CustomSearchBox as _CustomSearchBox } from '@c/organisms/CustomSearchBox';
import { CustomStateResults as _CustomStateResults } from '@c/organisms/CustomStateResults';
import { CustomStats as _CustomStats } from '@c/organisms/CustomStats';
import { AlgoliaProvider } from '@l/algolia';

const CustomSearchBox = connectSearchBox(_CustomSearchBox);
const CustomStats = connectStats(_CustomStats);
const CustomInfiniteHits = connectInfiniteHits(_CustomInfiniteHits);
const CustomStateResults = connectStateResults(_CustomStateResults);

/**
 * Props for {@link SearchDialog}
 */
export interface Props {
  /** Whether dialog is open */
  isOpen: boolean;
  /** Whether search is available */
  isAvailable: boolean;
  /** Close dialog */
  onClose: () => void;
}

/**
 * Modal for site-wide search
 * @see {@link https://fwywd.com/tech/next-algolia}
 */
export const SearchDialog = ({
  isOpen,
  isAvailable,
  onClose,
}: Props): JSX.Element => (
  <AlgoliaProvider>
    <CustomStateResults />
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className={classNames(
          'relative mx-auto flex max-h-full min-h-[50%] max-w-3xl flex-col divide-y rounded bg-white lg:max-h-[76vh]',
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
    </Modal>
  </AlgoliaProvider>
);
