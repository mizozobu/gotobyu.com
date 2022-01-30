import { Transition, Dialog } from '@headlessui/react';
import { ClipboardCheckIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CopiedDialog = ({ isOpen, onClose }: Props) => (
  <Transition appear show={isOpen} as={Fragment} data-noindex='true'>
    <Dialog
      as='div'
      className='fixed inset-0 z-30 overflow-y-auto'
      onClose={onClose}
    >
      <div className='flex min-h-screen w-screen items-center justify-center'>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-200'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-50' />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter='ease-out duration-200'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0'
        >
          <div
            className='my-8 inline-block w-full max-w-md overflow-hidden rounded-2xl bg-none p-6 text-left align-middle transition-all'
            // see https://stackoverflow.com/questions/3461441/prevent-flicker-on-webkit-transition-of-webkit-transform
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Dialog.Title
              as='div'
              className='flex flex-col items-center text-lg font-medium leading-6 text-white md:flex-row'
            >
              <ClipboardCheckIcon className='mb-8 h-24 md:mb-0 md:mr-2 md:h-12' />
              この場所へのURLをコピーしました
            </Dialog.Title>
            <button
              type='button'
              className='sr-only p-2 text-white'
              onClick={onClose}
            >
              <XIcon className='inline h-8' />
            </button>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
);
