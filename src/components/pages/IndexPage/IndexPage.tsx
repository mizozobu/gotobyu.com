import { FC } from 'react';
import Link from 'next/link';
import { NextImage } from '@c/atoms/NextImage';
import { PageCard } from '@c/molecules/PageCard';
import { SchoolCard } from '@c/molecules/SchoolCard';
import { Hero } from '@c/organisms/Hero';
import { AdditionalSchoolLinks, ApplyLinks, CareerLinks, OtherLinks } from '@d';
import byuLogoImage from '@p/byu.png';
import byuhLogoImage from '@p/byuh.png';
import byuiLogoImage from '@p/byui.png';

export interface Props {}

export const IndexPage: FC<Props> = () => (
  <div className='space-y-12 lg:space-y-16 px-6 py-12 lg:py-16 lg:mx-24'>
    <Hero className='pb-10' />
    <div className='px-6 lg:px-0 -mx-6 lg:mx-0'>
      <h2 className='text-2xl md:text-4xl font-bold'>各大学について</h2>
      <div className='flex lg:grid lg:grid-flow-row-dense lg:grid-cols-3 lg:gap-y-10 lg:justify-items-center px-6 lg:px-0 py-10 -mx-6 lg:mx-0 space-x-12 lg:space-x-0 overflow-scroll lg:overflow-visible'>
        <Link href='/byu'>
          <a>
            <SchoolCard
              className='mx-8'
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
              className='mx-8'
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
              className='mx-8'
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
    <div className='px-6 lg:px-0 -mx-6 lg:mx-0'>
      <h2 className='text-2xl md:text-4xl font-bold'>知っておきたい情報</h2>
      <div className='flex lg:grid lg:grid-flow-row-dense lg:grid-cols-4 lg:gap-y-10 lg:justify-items-center px-6 lg:px-0 py-10 -mx-6 lg:mx-0 space-x-12 lg:space-x-0 overflow-scroll lg:overflow-visible'>
        {[
          ...AdditionalSchoolLinks,
          ...ApplyLinks,
          ...CareerLinks,
          OtherLinks[0],
        ].map(({ name, href, description, icon: Icon }) => (
          <Link key={name} href={href}>
            <a>
              <PageCard icon={Icon} name={name} description={description} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  </div>
);
