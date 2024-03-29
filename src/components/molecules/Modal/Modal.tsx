import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import type { ComponentPropsWithRef, ReactNode } from 'react';

/**
 * Props for {@link Modal}
 */
type Props = ComponentPropsWithRef<typeof Dialog> & {
  /** Whether dialog is open */
  isOpen: boolean;
  /** Dialog content */
  children: ReactNode;
  /** Close dialog */
  onClose: () => void;
};

/**
 * Modal
 */
export const Modal = ({
  isOpen,
  onClose,
  children,
  ...props
}: Props): JSX.Element => (
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
      {...props}
    >
      <div
        className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm'
        onClick={onClose}
        aria-hidden='true'
        data-testid='modal-overlay'
      />
      {children}
    </Dialog>
  </Transition>
);
