import { FC } from 'react';
import Head from 'next/head';
import { Title } from '@c/atoms/Title';
import { InternshipPage } from '@c/pages/InternshipPage';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _InternshipPage: FC<Props> = () => (
  <>
    <Title>インターンシップ</Title>
    <Head>
      <meta
        name='description'
        content='BYU、BYUH、BYUIの学生はの中には誰もが知っている有名企業でインターンシップをしたり、インターンシップにもかかわらず一般の新入社員よりも給与を貰っていたりする人もいます。インターンシップ先と給与についての調査結果を掲載しています。'
      />
    </Head>

    <InternshipPage />
  </>
);

export default _InternshipPage;
