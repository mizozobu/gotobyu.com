import { FC } from 'react';
import type { InferGetStaticPropsType, GetServerSideProps } from 'next';
import Head from 'next/head';
import { Title } from '@c/atoms/Title';
import { FaqPage } from '@c/pages/FaqPage';
import cmsClient, { ContentTypeName } from '@l/CmsClient';
import { Question } from '@s/question';

export const getStaticProps: GetServerSideProps<{ questions: Question[] }> =
  async () => {
    const { meta, items: questions } = await cmsClient.list<Question>(
      ContentTypeName.question,
    );

    return {
      props: {
        meta,
        questions,
      },
      revalidate: 60 * 60 * 24, // rebuild every 24h
    };
  };

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

// eslint-disable-next-line no-underscore-dangle
const _FaqPage: FC<Props> = ({ questions }: Props) => (
  <>
    <Title>よくある質問</Title>
    <Head>
      <meta
        name='description'
        content='よく聞かれる質問とそれに対する回答を掲載しています。'
      />
    </Head>

    <FaqPage questions={questions} />
  </>
);

export default _FaqPage;
