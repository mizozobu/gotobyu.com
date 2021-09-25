import { FC } from 'react';
import { ComparePage } from '@c/pages/ComparePage';
import { Seo } from '@c/organisms/Seo';
import { ComparePageMeta } from '@d';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _ComparePage: FC<Props> = () => (
  <>
    <Seo
      title={ComparePageMeta.title}
      description={ComparePageMeta.description}
      openGraph={{
        type: 'article',
        title: ComparePageMeta.title,
        description: ComparePageMeta.description,
      }}
    />

    <ComparePage />
  </>
);

export default _ComparePage;
