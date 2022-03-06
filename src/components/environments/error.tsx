import { CenterMiddleContainer } from '@c/atoms/CenterMiddleContainer';
import { CirculatingCircles } from '@c/atoms/CirculatingCircles';
import { MDX } from '@l/mdx';

/**
 * Props for {@link ErrorEnvironment}
 */
interface Props {
  /** Error message */
  message?: string;
}

/**
 * Error page
 */
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
