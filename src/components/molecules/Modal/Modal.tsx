import { Dialog, Transition } from '@headlessui/react';
import { Fragment, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

/**
 * Props for {@link Modal}
 */
interface Props {
  /** Whether dialog is open */
  isOpen: boolean;
  /** Dialog content */
  children: ReactNode;
  /** Close dialog */
  onClose: () => void;
}

/**
 * Menu dialog for mobile
 */
export const Modal = ({ isOpen, onClose, children }: Props): JSX.Element =>
  createPortal(
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
        <div
          className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm'
          onClick={onClose}
          aria-hidden='true'
          data-testid='modal-overlay'
        />
        {children}
      </Dialog>
    </Transition>,
    document.body,
  );
