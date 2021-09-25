import { FC } from 'react';
import { ComparePage } from '@c/pages/ComparePage';
import { Seo } from '@c/organisms/Seo';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _ComparePage: FC<Props> = () => (
  <>
    <Seo
      title='BYU、BYUH、BYUIの比較'
      description='BYU、BYUH、BYUIを費用、生徒数、専攻数、英語力などの面で比較します。'
      openGraph={{
        type: 'article',
        title: 'BYU、BYUH、BYUIの比較',
        description:
          'BYU、BYUH、BYUIを費用、生徒数、専攻数、英語力などの面で比較します。',
      }}
    />

    <ComparePage />
  </>
);

export default _ComparePage;
