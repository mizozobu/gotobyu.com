import { FC } from 'react';
import { CirculatingCircles } from '@cmp/atoms/CirculatingCircles';
import { MDX } from '@l/mdx';

export interface Props {
  statusCode: number;
}

export const ErrorPage: FC<Props> = ({ statusCode }: Props) => (
  // see https://stackoverflow.com/questions/8468066/child-inside-parent-with-min-height-100-not-inheriting-height
  <div className='absolute inset-0 flex flex-col justify-center items-center'>
    <MDX.a href='/'>
      <CirculatingCircles animated className='w-48' />
    </MDX.a>
    <div className='mt-16 space-y-8'>
      <p>
        {statusCode === 404
          ? 'このページは存在しません。'
          : 'エラーが発生しました。'}
      </p>
      <p className='text-center'>
        <MDX.a href='/'>ホームに戻る</MDX.a>
      </p>
    </div>
  </div>
);
