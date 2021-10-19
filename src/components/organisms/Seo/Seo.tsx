import { FC } from 'react';
import { useRouter } from 'next/router';
import { NextSeo, NextSeoProps } from 'next-seo';
import { BASE_URL } from './Seo.constants';

export interface Props extends NextSeoProps {}

export const Seo: FC<Props> = ({ openGraph, ...prop }: Props) => {
  const router = useRouter();

  return (
    <NextSeo
      {...prop}
      titleTemplate='%s | gotobyu.com'
      defaultTitle='gotobyu.com'
      /*
       * see specification at https://ogp.me
       * preview at https://www.opengraph.xyz
       * twitter preview at https://cards-dev.twitter.com/validator
       */
      twitter={{
        cardType: 'summary',
      }}
      openGraph={{
        ...openGraph,
        url: new URL(router.pathname, BASE_URL).href,
        locale: 'ja_JP',
        images: [
          {
            url: new URL('/open-graph.png', BASE_URL).href,
            width: 600,
            height: 600,
            alt: 'gotobyu.com',
          },
        ],
      }}
    />
  );
};
