import { FC } from 'react';
import { InternshipPage } from '@c/pages/InternshipPage';
import { Seo } from '@c/organisms/Seo';
import { InternshipPageMeta } from '@d';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _InternshipPage: FC<Props> = () => (
  <>
    <Seo
      title={InternshipPageMeta.title}
      description={InternshipPageMeta.description}
      openGraph={{
        type: 'article',
        title: InternshipPageMeta.title,
        description: InternshipPageMeta.description,
      }}
    />

    <InternshipPage />
  </>
);

export default _InternshipPage;
