import { FC } from 'react';
import Link from 'next/link';
import { H2 } from '@c/atoms/H2';
import { NextImage } from '@c/atoms/NextImage';
import { CirculatingCircles } from '@c/atoms/CirculatingCircles';
import { PageCard } from '@c/molecules/PageCard';
import { SchoolCard } from '@c/molecules/SchoolCard';
import { TypingEffect } from '@c/molecules/TypingEffect';
import byuLogoImage from '@p/byu/byu-logo.png';
import byuhLogoImage from '@p/byuh/byuh-logo.png';
import byuiLogoImage from '@p/byui/byui-logo.png';
import { AdditionalSchoolLinks, ApplyLinks, CareerLinks, OtherLinks } from '@d';

export interface Props {}

export const IndexPage: FC<Props> = () => (
  <div className='py-12 lg:py-16 space-y-12 lg:space-y-16'>
    <div
      className={classNames(
        'grid grid-cols-1 lg:grid-cols-5 grid-rows-1 max-w-screen-lg xl:max-w-screen-xl mx-auto px-6 pb-10',
      )}
    >
      <div className='col-span-3'>
        <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
          <span className='block text-byu'>BYU</span>
          <span className='block text-byuh'>BYUH</span>
          <span className='block text-byui'>BYUI</span>
          <div className='h-32 md:h-48 overflow-hidden'>
            <TypingEffect
              caretWidth='5px'
              waitBeforeType={1000}
              waitAfterType={3000}
            >
              {[
                'にはどうやって入学するの?',
                'で必要な英語力は?',
                'の費用はどのくらい？',
                'で奨学金はもらえるの?',
                'の卒業後の進路は?',
              ]}
            </TypingEffect>
          </div>
        </h1>
        <p className='mt-3 md:mt-5 text-base sm:text-lg md:text-xl text-gray-500'>
          在学生と卒業生がBYU、BYUH、BYUIについて入学前に知っておきたい情報をまとめました。
        </p>
      </div>
      <div className='hidden lg:flex items-center justify-center max-w-4xl col-span-2'>
        <CirculatingCircles className='max-w-md' animated />
      </div>
    </div>
    <div className='max-w-screen-lg xl:max-w-screen-xl mx-auto'>
      <H2 className='px-6 text-2xl md:text-4xl font-bold'>各大学について</H2>
      <div className='flex lg:grid lg:grid-flow-row-dense lg:grid-cols-3 lg:gap-y-10 lg:justify-items-center py-10 space-x-12 lg:space-x-0 overflow-scroll lg:overflow-visible'>
        <Link href='/schools/byu'>
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
        <Link href='/schools/byuh'>
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
        <Link href='/schools/byui'>
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
    <div className='max-w-screen-lg xl:max-w-screen-xl mx-auto'>
      <H2 className='px-6 text-2xl md:text-4xl font-bold'>
        知っておきたい情報
      </H2>
      <div className='flex lg:grid lg:grid-flow-row-dense lg:grid-cols-4 lg:gap-y-10 lg:justify-items-center px-6 lg:px-0 py-10 space-x-12 lg:space-x-0 overflow-scroll lg:overflow-visible'>
        {[
          ...AdditionalSchoolLinks,
          ...ApplyLinks,
          ...CareerLinks,
          OtherLinks[0],
        ].map(({ name, href, detail, icon: Icon }) => (
          <Link key={name} href={href}>
            <a>
              <PageCard icon={Icon} name={name} detail={detail} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  </div>
);
