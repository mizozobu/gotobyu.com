import { FC } from 'react';
import { InternalLink } from '@c/atoms/InternalLink';
import { CirculatingCircles } from '@c/atoms/CirculatingCircles';

export interface Props {
  statusCode: number;
}

export const ErrorPage: FC<Props> = ({ statusCode }: Props) => (
  <main className='flex flex-col justify-center items-center'>
    <InternalLink href='/'>
      <a>
        <CirculatingCircles animated className='w-48' />
      </a>
    </InternalLink>
    <div className='mt-16 space-y-8'>
      <p>
        {statusCode === 404
          ? 'このページは存在しません。'
          : 'エラーが発生しました。'}
      </p>
      <p className='text-center'>
        <InternalLink href='/'>
          <a>ホームに戻る</a>
        </InternalLink>
      </p>
    </div>
  </main>
);
