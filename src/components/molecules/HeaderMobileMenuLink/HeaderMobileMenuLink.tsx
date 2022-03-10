import Link from 'next/link';
import type { MouseEventHandler, ComponentType } from 'react';

/**
 * Props for {@link HeaderMobileMenuLink}
 */
interface Props {
  name: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Mobile header menu link
 */
export const HeaderMobileMenuLink = ({
  name,
  href,
  icon: Icon,
  onClick,
}: Props): JSX.Element => (
  <Link href={href}>
    <a tabIndex={-1}>
      <button
        type='button'
        className='flex w-full items-center rounded-md px-3 py-2 text-left hover:bg-gray-50'
        onClick={onClick}
      >
        <Icon className='h-6 w-6 shrink-0 text-indigo-700' aria-hidden='true' />
        <span className='ml-3 text-base font-medium text-gray-900'>{name}</span>
      </button>
    </a>
  </Link>
);
