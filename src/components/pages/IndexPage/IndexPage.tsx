import { FC } from 'react';
import Link from 'next/link';
import { SchoolCard } from '@c/molecules/SchoolCard';
import { Hero } from '@c/organisms/Hero';
import { NextImage } from '@c/atoms/NextImage';

export interface Props {}

export const IndexPage: FC<Props> = () => (
  <main>
    <Hero />
    <div className='py-8 sm:py-12 lg:py-16'>
      <div className='px-8 sm:px-12 lg:px-16 '>
        <h2 className='tracking-tight font-extrabold text-gray-900 text-2xl sm:text-4xl'>
          各学校について
        </h2>
      </div>
      <div className='flex lg:justify-around py-8 sm:py-12 lg:py-16 h-full overflow-scroll'>
        <Link href='/byu'>
          <a>
            <SchoolCard className='w-64 h-80 mx-8' colorClass='bg-byu'>
              <NextImage
                className='h-full p-4'
                src='/byu.png'
                alt='BYU Logo'
                layout='fill'
                objectFit='scale-down'
              />
            </SchoolCard>
          </a>
        </Link>
        <Link href='/byuh'>
          <a>
            <SchoolCard className='w-64 h-80 mx-8' colorClass='bg-byuh'>
              <NextImage
                className='h-full p-4'
                src='/byuh.png'
                alt='BYUH Logo'
                layout='fill'
                objectFit='scale-down'
              />
            </SchoolCard>
          </a>
        </Link>
        <Link href='/byui'>
          <a>
            <SchoolCard className='w-64 h-80 mx-8' colorClass='bg-byui'>
              <NextImage
                className='h-full p-4'
                src='/byui.png'
                alt='BYUI Logo'
                layout='fill'
                objectFit='scale-down'
              />
            </SchoolCard>
          </a>
        </Link>
      </div>
    </div>
  </main>
);
