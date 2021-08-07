import { Fragment, FC } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { ClipboardCheckIcon, XIcon } from '@heroicons/react/outline';

export interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CopiedDialog: FC<Props> = ({ isOpen, onClose }: Props) => (
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog
      as='div'
      className='fixed inset-0 z-30 overflow-y-auto'
      onClose={onClose}
    >
      <div className='flex justify-center items-center min-h-screen w-screen'>
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
          <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-none rounded-2xl'>
            <Dialog.Title
              as='div'
              className='flex flex-col md:flex-row items-center text-lg font-medium leading-6 text-white'
            >
              <ClipboardCheckIcon className='h-24 md:h-12 mb-8 md:mb-0 md:mr-2' />
              この場所へのURLをコピーしました
            </Dialog.Title>
            <button
              type='button'
              className='p-2 text-white sr-only'
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
