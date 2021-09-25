import { FC } from 'react';
import { BYUIPage } from '@c/pages/BYUIPage';
import { Seo } from '@c/organisms/Seo';
import { BYUIPageMeta } from '@d';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _BYUIPage: FC<Props> = () => (
  <>
    <Seo
      title={BYUIPageMeta.title}
      description={BYUIPageMeta.description}
      openGraph={{
        type: 'article',
        title: BYUIPageMeta.title,
        description: BYUIPageMeta.description,
      }}
    />

    <BYUIPage />
  </>
);

export default _BYUIPage;
