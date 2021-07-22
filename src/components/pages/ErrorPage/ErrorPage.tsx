import { FC } from 'react';
import { InternalLink } from '@c/atoms/InternalLink';
import { CirculatingCircles } from '@c/atoms/CirculatingCircles';

export interface Props {
  statusCode: number;
}

export const ErrorPage: FC<Props> = ({ statusCode }: Props) => (
  // see https://stackoverflow.com/questions/8468066/child-inside-parent-with-min-height-100-not-inheriting-height
  <main className='relative'>
    <div className='absolute inset-0 flex flex-col justify-center items-center'>
      <InternalLink href='/'>
        <CirculatingCircles animated className='w-48' />
      </InternalLink>
      <div className='mt-16 space-y-8'>
        <p>
          {statusCode === 404
            ? 'このページは存在しません。'
            : 'エラーが発生しました。'}
        </p>
        <p className='text-center'>
          <InternalLink href='/'>ホームに戻る</InternalLink>
        </p>
      </div>
    </div>
  </main>
);
