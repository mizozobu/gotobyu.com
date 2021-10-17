import { FC } from 'react';
import Link from 'next/link';
import { MailIcon, LinkIcon } from '@heroicons/react/outline';
import { BorderDraw } from '@c/atoms/BorderDraw';
import { FacebookIcon } from '@c/atoms/FacebookIcon';

export interface Props {}

export const Footer: FC<Props> = () => (
  <footer className='flex flex-col items-center p-8 sm:p-12 lg:p-16 bg-indigo-900 text-white'>
    <div>
      <Link href='/about'>
        <a>BYU Management Society Tokyo Chapter</a>
      </Link>
      <div className='flex justify-between mt-8'>
        <a
          href='mailto:byums.japan@gmail.com'
          target='_blank'
          rel='noreferrer'
          className='rounded-full'
        >
          <BorderDraw
            className='flex items-center justify-center w-14 h-14 p-4'
            borderColor='white'
          >
            <MailIcon className='w-8 h-8' />
          </BorderDraw>
        </a>
        <a
          href='https://www.facebook.com/BYUMSJP'
          target='_blank'
          rel='noreferrer'
          className='rounded-full'
        >
          <BorderDraw
            className='flex items-center justify-center w-14 h-14 p-4'
            borderColor='white'
          >
            <FacebookIcon className='w-8 h-8' />
          </BorderDraw>
        </a>
        <a
          href='https://byums.byu.edu/tokyo/'
          target='_blank'
          rel='noreferrer'
          className='rounded-full'
        >
          <BorderDraw
            className='flex items-center justify-center w-14 h-14 p-4'
            borderColor='white'
          >
            <LinkIcon className='w-8 h-8' />
          </BorderDraw>
        </a>
      </div>
    </div>
  </footer>
);
