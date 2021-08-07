import { FC } from 'react';
import Link from 'next/link';
import { MailIcon, LinkIcon } from '@heroicons/react/outline';
import { DrawBorderButton } from '@c/atoms/DrawBorderButton';
import { FacebookIcon } from '@c/atoms/FacebookIcon';

export interface Props {}

export const Footer: FC<Props> = () => (
  <footer className='flex flex-col items-center p-8 sm:p-12 lg:p-16 bg-indigo-900 text-white'>
    <div>
      <Link href='/faq'>
        <a>BYU Management Society Tokyo Chapter</a>
      </Link>
      <div className='flex justify-around mt-8'>
        <Link href='mailto:byums.japan@gmail.com'>
          <a target='_blank'>
            <DrawBorderButton className='w-10 h-10 p-2' borderColor='white'>
              <MailIcon className='w-8 h-8' />
            </DrawBorderButton>
          </a>
        </Link>
        <Link href='https://www.facebook.com/BYUMSJP'>
          <a target='_blank'>
            <DrawBorderButton className='w-10 h-10 p-2' borderColor='white'>
              <FacebookIcon className='w-8 h-8' />
            </DrawBorderButton>
          </a>
        </Link>
        <Link href='https://byums.byu.edu/tokyo/'>
          <a target='_blank'>
            <DrawBorderButton className='w-10 h-10 p-2' borderColor='white'>
              <LinkIcon className='w-8 h-8' />
            </DrawBorderButton>
          </a>
        </Link>
      </div>
    </div>
  </footer>
);
