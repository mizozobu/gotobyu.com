import { XIcon } from '@heroicons/react/outline';
import { HeaderMobileMenuLink } from '@c/molecules/HeaderMobileMenuLink';
import { Modal } from '@c/molecules/Modal/Modal';
import {
  SCHOOL_LINKS,
  ADDITIONAL_SCHOOL_LINKS,
  APPLY_LINKS,
  CAREER_LINKS,
  OTHER_LINKS,
} from '@d/links';

/**
 * Props for {@link HeaderMobileMenuDialog}
 */
export interface Props {
  /** Whether dialog is open */
  isOpen: boolean;
  /** Close dialog */
  onClose: () => void;
}

/**
 * Menu dialog for mobile
 */
export const HeaderMobileMenuDialog = ({
  isOpen,
  onClose,
}: Props): JSX.Element => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <div className='relative mx-auto flex max-h-full max-w-3xl flex-col overflow-y-auto rounded bg-white'>
      <div className='flex items-center justify-end px-4 py-2 md:px-6'>
        <button
          type='button'
          className='rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500'
          onClick={onClose}
        >
          <XIcon className='h-6 w-6 text-gray-400' />
        </button>
      </div>
      <nav className='grid gap-y-2 px-2 py-4'>
        {SCHOOL_LINKS.map(({ name, href, icon }) => (
          <HeaderMobileMenuLink
            key={name}
            name={name}
            href={href}
            icon={icon}
            onClick={onClose}
          />
        ))}
        {ADDITIONAL_SCHOOL_LINKS.map(({ name, href, icon }) => (
          <HeaderMobileMenuLink
            key={name}
            name={name}
            href={href}
            icon={icon}
            onClick={onClose}
          />
        ))}
      </nav>
      <hr className='border-y border-slate-100' />
      <nav className='mb-8 grid gap-y-2 px-2 py-4'>
        {APPLY_LINKS.map(({ name, href, icon }) => (
          <HeaderMobileMenuLink
            key={name}
            name={name}
            href={href}
            icon={icon}
            onClick={onClose}
          />
        ))}
        {CAREER_LINKS.map(({ name, href, icon }) => (
          <HeaderMobileMenuLink
            key={name}
            name={name}
            href={href}
            icon={icon}
            onClick={onClose}
          />
        ))}
        {OTHER_LINKS.map(({ name, href, icon }) => (
          <HeaderMobileMenuLink
            key={name}
            name={name}
            href={href}
            icon={icon}
            onClick={onClose}
          />
        ))}
      </nav>
    </div>
  </Modal>
);
