import { FC } from 'react';
import { LearnEnglishPage } from '@c/pages/LearnEnglishPage';
import { Seo } from '@c/organisms/Seo';
import { LearnEnglishPageMeta } from '@d';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _LearnEnglishPage: FC<Props> = () => (
  <>
    <Seo
      title={LearnEnglishPageMeta.title}
      description={LearnEnglishPageMeta.description}
      openGraph={{
        type: 'article',
        title: LearnEnglishPageMeta.title,
        description: LearnEnglishPageMeta.description,
      }}
    />

    <LearnEnglishPage />
  </>
);

export default _LearnEnglishPage;
