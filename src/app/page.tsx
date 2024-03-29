import classNames from 'classnames';
import { CirculatingCircles } from '@/components/atoms/CirculatingCircles';
import { Link } from '@/components/atoms/Link';
import { NextImage } from '@/components/atoms/NextImage';
import { BgRotateCard } from '@/components/molecules/BgRotateCard';
import { PageCard } from '@/components/molecules/PageCard';
import { TypingEffect } from '@/components/molecules/TypingEffect';
import {
  INDEX_PAGE_META,
  ADDITIONAL_SCHOOL_LINKS,
  APPLY_LINKS,
  CAREER_LINKS,
  OTHER_LINKS,
} from '@/data/links';
import { byuLogoImage } from '@/features/byu';
import { byuhLogoImage } from '@/features/byuh';
import { byuiLogoImage } from '@/features/byui';

export const metadata = {
  title: INDEX_PAGE_META.title,
  description: INDEX_PAGE_META.description,
  openGraph: {
    title: INDEX_PAGE_META.title,
    description: INDEX_PAGE_META.description,
    type: 'website',
    siteName: 'gotobyu.com',
    locale: 'ja_JP',
    images: [
      {
        url: '/open-graph.png',
        width: 600,
        height: 600,
        alt: 'gotobyu.com',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: INDEX_PAGE_META.title,
    description: INDEX_PAGE_META.description,
  },
};

/**
 * Index page
 */
const Index = (): JSX.Element => (
  <div className='space-y-12 py-12 lg:space-y-16 lg:py-16'>
    <div
      className={classNames(
        'mx-auto grid max-w-screen-lg grid-cols-1 grid-rows-1 px-6 pb-10 lg:grid-cols-5 xl:max-w-screen-xl',
      )}
    >
      <div className='col-span-3'>
        <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
          <span className='block text-byu'>BYU</span>
          <span className='block text-byuh'>BYUH</span>
          <span className='block text-byui'>BYUI</span>
          <div className='h-32 overflow-hidden md:h-48'>
            <TypingEffect
              style={{ '--caret-width': '5px' }}
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
        <p className='mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl'>
          在学生と卒業生がBYU、BYUH、BYUIについて入学前に知っておきたい情報をまとめました。
        </p>
      </div>
      <div className='col-span-2 hidden max-w-4xl items-center justify-center lg:flex'>
        <CirculatingCircles className='max-w-md' animated />
      </div>
    </div>
    <div className='mx-auto max-w-screen-lg xl:max-w-screen-xl'>
      <h2 className='mb-4 mt-8 px-6 text-2xl font-bold md:mb-8 md:mt-16 md:text-4xl'>
        各大学について
      </h2>
      <div className='grid snap-x snap-mandatory grid-flow-col grid-rows-1 justify-items-center gap-x-12 overflow-auto px-6 py-10'>
        <Link
          href='/schools/byu'
          className='snap-center snap-always rounded-xl'
        >
          <BgRotateCard
            style={{
              '--bg': 'linear-gradient(to bottom right, #002e5d, #001225)',
            }}
          >
            <NextImage
              className='h-full object-contain'
              src={byuLogoImage}
              alt='BYU Logo'
              placeholder='blur'
            />
          </BgRotateCard>
        </Link>
        <Link
          href='/schools/byuh'
          className='snap-center snap-always rounded-xl'
        >
          <BgRotateCard
            style={{
              '--bg': 'linear-gradient(to bottom right, #9e1b34, #3f0a14)',
            }}
          >
            <NextImage
              className='h-full object-contain'
              src={byuhLogoImage}
              alt='BYUH Logo'
              placeholder='blur'
            />
          </BgRotateCard>
        </Link>
        <Link
          href='/schools/byui'
          className='snap-center snap-always rounded-xl'
        >
          <BgRotateCard
            style={{
              '--bg': 'linear-gradient(to bottom right, #0076B6, #002f48)',
            }}
          >
            <NextImage
              className='h-full object-contain'
              src={byuiLogoImage}
              alt='BYUI Logo'
              placeholder='blur'
            />
          </BgRotateCard>
        </Link>
      </div>
    </div>
    <div className='mx-auto max-w-screen-lg xl:max-w-screen-xl'>
      <h2 className='mb-4 mt-8 px-6 text-2xl font-bold md:mb-8 md:mt-16 md:text-4xl'>
        知っておきたい情報
      </h2>
      <div className='grid snap-x snap-mandatory grid-flow-col grid-rows-1 justify-items-center gap-x-12 overflow-auto px-6 py-10 lg:grid-flow-row lg:grid-cols-3 lg:gap-y-12 xl:grid-cols-4'>
        {[
          ...ADDITIONAL_SCHOOL_LINKS,
          ...APPLY_LINKS,
          ...CAREER_LINKS,
          OTHER_LINKS[0],
        ].map(({ name, href, detail, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className='snap-center snap-always rounded-xl'
          >
            <PageCard icon={Icon} name={name} detail={detail} />
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Index;
