/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import { useEffect, useState, FC } from 'react';
import { Transition } from '@headlessui/react';

export interface Props {}

const texts = [
  'にどうやって入学するのか?',
  'で費用はどのくらいかかるのか？',
  'の違いは何か？',
  'は自分に合っているのか?',
];

export const Hero: FC<Props> = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(-1);
      setTimeout(() => {
        setCurrent(current < texts.length - 1 ? current + 1 : 0);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

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
              <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                <span className='block text-byu'>BYU</span>
                <span className='block text-byuh'>BYUH</span>
                <span className='block text-byui'>BYUI</span>
                {texts.map((t, i) => (
                  <Transition
                    key={t}
                    show={i === current}
                    enter='transition-opacity duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='transition-opacity duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <span className='block xl:inline'>{t}</span>
                  </Transition>
                ))}
              </h1>
              <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                私はBYUに行けるのか？行くメリットあるのか？私にあっているのか？
                BYUのプロボ、ハワイ、とアイダホのキャンパスに違いがあるのか？
                上記みたいな質問のお持ちの方のためにBYU卒業生が情報をまとめてみました！
                入学まで、在学中、と卒業後に関する質問を答えてみましたので、ぜひ拝見ください。
              </p>
              <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                <div className='rounded-md shadow'>
                  <a
                    href='/'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
                  >
                    Get started
                  </a>
                </div>
                <div className='mt-3 sm:mt-0 sm:ml-3'>
                  <a
                    href='/'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'
                  >
                    Live demo
                  </a>
                </div>
              </div>
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
