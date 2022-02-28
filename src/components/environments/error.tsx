import { CenterMiddleContainer } from '@cmp/atoms/CenterMiddleContainer';
import { CirculatingCircles } from '@cmp/atoms/CirculatingCircles';
import { MDX } from '@l/mdx';

interface Props {
  message?: string;
}

export const ErrorEnvironment = ({
  message = 'エラーが発生しました。',
}: Props) => (
  <CenterMiddleContainer>
    <MDX.a href='/'>
      <CirculatingCircles animated className='w-48' />
    </MDX.a>
    <div className='mt-16 space-y-8'>
      <p>{message}</p>
      <p className='text-center'>
        <MDX.a href='/'>ホームに戻る</MDX.a>
      </p>
    </div>
  </CenterMiddleContainer>
);
