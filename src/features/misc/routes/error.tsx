import { CenterMiddleContainer } from '@/components/atoms/CenterMiddleContainer';
import { CirculatingCircles } from '@/components/atoms/CirculatingCircles';
import { InternalLink } from '@/components/atoms/InternalLink';

/**
 * Props for {@link Error}
 */
interface Props {
  /** Error message */
  message?: string;
}

/**
 * Error page
 */
export const Error = ({
  message = 'エラーが発生しました。',
}: Props): JSX.Element => (
  <CenterMiddleContainer>
    <InternalLink href='/'>
      <CirculatingCircles animated className='w-48' />
    </InternalLink>
    <div className='mt-16 space-y-8'>
      <p>{message}</p>
      <p className='text-center'>
        <InternalLink href='/'>ホームに戻る</InternalLink>
      </p>
    </div>
  </CenterMiddleContainer>
);
