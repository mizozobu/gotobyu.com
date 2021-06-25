import { FC } from 'react';
import Link from 'next/link';
import { MailIcon, LinkIcon } from '@heroicons/react/outline';
import { FacebookIcon } from '@c/atoms/FacebookIcon';
import styles from './Footer.module.css';

export interface Props {}

export const Footer: FC<Props> = () => (
  <footer className='flex flex-col items-center p-8 sm:p-12 lg:p-16 bg-gray-800 text-white'>
    <div>
      <p>BYU Management Society Tokyo Chapter</p>
      <div className='flex justify-around mt-8'>
        <Link href='mailto:byums.japan@gmail.com'>
          <a target='_blank'>
            <button
              type='button'
              className={`relative flex items-center justify-center w-10 h-10 px-2 py-1 rounded-full ${styles.button} ${styles.spin} ${styles.circle}`}
            >
              <MailIcon className='w-8 h-8' />
            </button>
          </a>
        </Link>
        <Link href='https://www.facebook.com/BYUMSJP'>
          <a target='_blank'>
            <button
              type='button'
              className={`relative flex items-center justify-center w-10 h-10 px-2 py-1 rounded-full ${styles.button} ${styles.spin} ${styles.circle}`}
            >
              <FacebookIcon className='w-8 h-8' />
            </button>
          </a>
        </Link>
        <Link href='https://byums.byu.edu/tokyo/'>
          <a target='_blank'>
            <button
              type='button'
              className={`relative flex items-center justify-center w-10 h-10 px-2 py-1 rounded-full ${styles.button} ${styles.spin} ${styles.circle}`}
            >
              <LinkIcon className='w-8 h-8' />
            </button>
          </a>
        </Link>
      </div>
    </div>
  </footer>
);
