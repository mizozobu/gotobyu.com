import Link from 'next/link';
import type { ComponentType } from 'react';

/**
 * Props for {@link HeaderMenuLink}
 */
interface Props {
  /** Title for the link */
  name: string;
  /** Details for the link */
  detail: string;
  /** href to pass */
  href: string;
  /** Icon */
  icon: ComponentType<{ className?: string }>;
  /** Click event handler */
  onClick: () => void;
}

/**
 * Header menu link
 */
export const HeaderMenuLink = ({
  name,
  detail,
  href,
  icon: Icon,
  onClick,
}: Props): JSX.Element => (
  <Link href={href}>
    <a tabIndex={-1}>
      <button
        type='button'
        className='flex w-full items-start rounded-lg p-3 text-left hover:bg-gray-50'
        onClick={onClick}
      >
        <Icon className='h-6 w-6 shrink-0 text-indigo-700' aria-hidden='true' />
        <div className='ml-4'>
          <p className='text-base font-medium text-gray-900'>{name}</p>
          <p className='mt-1 text-sm text-gray-500'>{detail}</p>
        </div>
      </button>
    </a>
  </Link>
);
