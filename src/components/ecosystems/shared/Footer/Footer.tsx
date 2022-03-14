import { MailIcon, LinkIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { FacebookIcon } from '@c/atoms/FacebookIcon';
import { RippleButton } from '@c/atoms/RippleButton';

/**
 * Footer
 */
export const Footer = (): JSX.Element => (
  <footer
    className='flex flex-col items-center bg-indigo-900 p-8 text-white sm:p-12 lg:p-16'
    data-noindex='true'
  >
    <div>
      <Link href='/about'>
        <a>BYU Management Society Tokyo Chapter</a>
      </Link>
      <div className='mt-8 flex justify-between'>
        <a
          href='mailto:byums.japan@gmail.com'
          target='_blank'
          rel='noreferrer'
          className='rounded-full'
          aria-label='email'
        >
          <RippleButton
            className='flex h-14 w-14 items-center justify-center rounded-full border border-white p-4'
            backgroundColor='rgb(49 46 129)'
            rippleColor='white'
          >
            <MailIcon className='h-8 w-8' />
          </RippleButton>
        </a>
        <a
          href='https://www.facebook.com/BYUMSJP'
          target='_blank'
          rel='noreferrer'
          className='rounded-full'
          aria-label='facebook'
        >
          <RippleButton
            className='flex h-14 w-14 items-center justify-center rounded-full border border-white p-4'
            backgroundColor='rgb(49 46 129)'
            rippleColor='white'
          >
            <FacebookIcon className='h-8 w-8' />
          </RippleButton>
        </a>
        <a
          href='https://byums.byu.edu/tokyo/'
          target='_blank'
          rel='noreferrer'
          className='rounded-full'
          aria-label='website'
        >
          <RippleButton
            className='flex h-14 w-14 items-center justify-center rounded-full border border-white p-4'
            backgroundColor='rgb(49 46 129)'
            rippleColor='red'
          >
            <LinkIcon className='h-8 w-8' />
          </RippleButton>
        </a>
      </div>
    </div>
  </footer>
);
