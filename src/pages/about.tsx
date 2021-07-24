import { FC } from 'react';
import Head from 'next/head';
import { Title } from '@c/atoms/Title';
import { AboutPage } from '@c/pages/AboutPage';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _AboutPage: FC<Props> = () => (
  <>
    <Title>運営者について</Title>
    <Head>
      <meta
        name='description'
        content='このウェブサイトを運営するBYU Management Society Tokyo Chapterについてです。'
      />
    </Head>

    <AboutPage />
  </>
);

export default _AboutPage;
