import { CirculatingCircles } from '@cmp/atoms/CirculatingCircles';
import { CenterMiddleContainer } from '@cmp/templates/CenterMiddleContainer';
import { MDX } from '@l/mdx';

interface Props {
  statusCode: number;
}

export const ErrorPage = ({ statusCode }: Props) => (
  <CenterMiddleContainer>
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
  </CenterMiddleContainer>
);
