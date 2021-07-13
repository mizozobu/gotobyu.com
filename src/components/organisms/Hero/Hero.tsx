import { useState, FC } from 'react';
import { Type } from '@c/atoms/Type';
import { NextImage } from '@c/atoms/NextImage';

export interface Props {}

const texts = [
  'にはどうやって入学するの?',
  'で必要な英語力は?',
  'の費用はどのくらい？',
  'で奨学金はもらえるの?',
  'の卒業後の進路は?',
];

export const Hero: FC<Props> = () => {
  const [current, setCurrent] = useState(0);

  const handleBack = () => {
    setCurrent(current < texts.length - 1 ? current + 1 : 0);
  };

  return (
    <div className='relative'>
      <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1 max-w-7xl mx-auto'>
        <div className='px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'>
          <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
            <span className='block text-byu'>BYU</span>
            <span className='block text-byuh'>BYUH</span>
            <span className='block text-byui'>BYUI</span>
            <div className='h-32 md:h-48 overflow-hidden'>
              <Type
                caretWidth='5px'
                waitBeforeType={1000}
                waitAfterType={3000}
                onBack={handleBack}
              >
                {texts[current]}
              </Type>
            </div>
          </h1>
          <p className='mt-3 md:mt-5 text-base sm:text-lg md:text-xl text-gray-500'>
            どうやって入学するの？
            <br />
            どのくらいの英語力が必要なの？
            <br />
            費用はどのくらいかかるの？
            <br />
            奨学金はもらえるの？
            <br />
            BYU、BYUH、BYUIは何が違うの？
            <br />
            卒業後はどんな会社に就職しているの？
            <br />
            このような入学前、在学中、卒業後に関する質問に関する情報を在学生と卒業生が情報をまとめました。
          </p>
        </div>
      </div>
      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:left-1/2'>
        <div className='relative w-full h-full'>
          <svg
            className='hidden lg:block absolute left-0 inset-y-0 h-full w-24 text-white z-10'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='0,0 100,0 0,100' />
          </svg>
          <NextImage
            className='object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
            src='/hero.jpeg'
            alt=''
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
};
