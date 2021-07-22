import { useState, FC, HTMLAttributes } from 'react';
import { CirculatingCircles } from '@c/atoms/CirculatingCircles';
import { Type } from '@c/atoms/Type';

export interface Props extends HTMLAttributes<HTMLDivElement> {}

const texts = [
  'にはどうやって入学するの?',
  'で必要な英語力は?',
  'の費用はどのくらい？',
  'で奨学金はもらえるの?',
  'の卒業後の進路は?',
];

export const Hero: FC<Props> = ({ className = '', ...props }: Props) => {
  const [current, setCurrent] = useState(0);

  const handleBack = () => {
    setCurrent(current < texts.length - 1 ? current + 1 : 0);
  };

  return (
    <div
      {...props}
      className={`grid grid-cols-1 lg:grid-cols-5 grid-rows-1 ${className}`}
    >
      <div className='col-span-3'>
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
          在学生と卒業生がBYU、BYUH、BYUIについて入学前に知っておきたい情報をまとめました。
        </p>
      </div>
      <div className='hidden lg:flex items-center justify-center max-w-4xl col-span-2'>
        <CirculatingCircles className='max-w-md' animated />
      </div>
    </div>
  );
};
