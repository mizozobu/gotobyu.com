import { FC } from 'react';
import Link from 'next/link';
import { SchoolCard } from '@c/molecules/SchoolCard';
import { Hero } from '@c/organisms/Hero';
import { NextImage } from '@c/atoms/NextImage';
import byuLogoImage from '@p/byu.png';
import byuhLogoImage from '@p/byuh.png';
import byuiLogoImage from '@p/byui.png';

export interface Props {}

export const IndexPage: FC<Props> = () => (
  <main>
    <Hero />
    <div className='py-8 sm:py-12 lg:py-16'>
      <div className='px-8 sm:px-12 lg:px-16 '>
        <h2 className='font-bold text-2xl sm:text-4xl'>各学校について</h2>
      </div>
      <div className='flex lg:justify-around py-8 sm:py-12 lg:py-16 h-full overflow-scroll'>
        <Link href='/byu'>
          <a>
            <SchoolCard
              className='w-64 h-80 mx-8'
              colorClass='bg-gradient-to-br from-byu to-byu-dark'
            >
              <NextImage
                className='h-full p-4'
                src={byuLogoImage}
                alt='BYU Logo'
                placeholder='blur'
                layout='fill'
                objectFit='scale-down'
              />
            </SchoolCard>
          </a>
        </Link>
        <Link href='/byuh'>
          <a>
            <SchoolCard
              className='w-64 h-80 mx-8'
              colorClass='bg-gradient-to-br from-byuh to-byuh-dark'
            >
              <NextImage
                className='h-full p-4'
                src={byuhLogoImage}
                alt='BYUH Logo'
                placeholder='blur'
                layout='fill'
                objectFit='scale-down'
              />
            </SchoolCard>
          </a>
        </Link>
        <Link href='/byui'>
          <a>
            <SchoolCard
              className='w-64 h-80 mx-8'
              colorClass='bg-gradient-to-br from-byui to-byui-dark'
            >
              <NextImage
                className='h-full p-4'
                src={byuiLogoImage}
                alt='BYUI Logo'
                placeholder='blur'
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
