/* eslint-disable @next/next/no-img-element */
import { useState, FC } from 'react';
import { Type } from '@c/atoms/Type';

export interface Props {}

const texts = [
  'にどうやって入学するのか?',
  'で費用はどのくらいかかるのか？',
  'の違いは何か？',
  'は自分に合っているのか?',
];

export const Hero: FC<Props> = () => {
  const [current, setCurrent] = useState(0);

  const handleBack = () => {
    setCurrent(current < texts.length - 1 ? current + 1 : 0);
  };

  return (
    <div className='relative bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative flex justify-center items-center z-10 bg-white lg:max-w-2xl lg:w-full'>
          <svg
            className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>

          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'>
            <div>
              <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl h-80'>
                <span className='block text-byu'>BYU</span>
                <span className='block text-byuh'>BYUH</span>
                <span className='block text-byui'>BYUI</span>
                <div className='h-48 overflow-hidden'>
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
              <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 h-'>
                私はBYUに行けるのか？行くメリットあるのか？私にあっているのか？
                BYUのプロボ、ハワイ、とアイダホのキャンパスに違いがあるのか？
                上記みたいな質問のお持ちの方のためにBYU卒業生が情報をまとめてみました！
                入学まで、在学中、と卒業後に関する質問を答えてみましたので、ぜひ拝見ください。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <img
          className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
          src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
          alt=''
        />
      </div>
    </div>
  );
};
