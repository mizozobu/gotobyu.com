import { FC } from 'react';
import { LearnEnglishPage } from '@c/pages/LearnEnglishPage';
import { Seo } from '@c/organisms/Seo';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _LearnEnglishPage: FC<Props> = () => (
  <>
    <Seo
      title='英語の勉強方法'
      description='BYU、BYUH、BYUIへの入学に必要な英語力を満たすための勉強法を紹介しています。'
      openGraph={{
        type: 'article',
        title: '英語の勉強方法',
        description:
          'BYU、BYUH、BYUIへの入学に必要な英語力を満たすための勉強法を紹介しています。',
      }}
    />

    <LearnEnglishPage />
  </>
);

export default _LearnEnglishPage;
