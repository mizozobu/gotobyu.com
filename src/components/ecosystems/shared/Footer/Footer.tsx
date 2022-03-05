import { MailIcon, LinkIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { BorderDraw } from '@c/atoms/BorderDraw';
import { FacebookIcon } from '@c/atoms/FacebookIcon';

/**
 * Footer
 */
export const Footer = () => (
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
          <BorderDraw
            className='flex h-14 w-14 items-center justify-center p-4'
            borderColor='white'
          >
            <MailIcon className='h-8 w-8' />
          </BorderDraw>
        </a>
        <a
          href='https://www.facebook.com/BYUMSJP'
          target='_blank'
          rel='noreferrer'
          className='rounded-full'
          aria-label='facebook'
        >
          <BorderDraw
            className='flex h-14 w-14 items-center justify-center p-4'
            borderColor='white'
          >
            <FacebookIcon className='h-8 w-8' />
          </BorderDraw>
        </a>
        <a
          href='https://byums.byu.edu/tokyo/'
          target='_blank'
          rel='noreferrer'
          className='rounded-full'
          aria-label='website'
        >
          <BorderDraw
            className='flex h-14 w-14 items-center justify-center p-4'
            borderColor='white'
          >
            <LinkIcon className='h-8 w-8' />
          </BorderDraw>
        </a>
      </div>
    </div>
  </footer>
);
