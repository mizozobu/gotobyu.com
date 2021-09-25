import { FC } from 'react';
import { InternshipPage } from '@c/pages/InternshipPage';
import { Seo } from '@c/organisms/Seo';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _InternshipPage: FC<Props> = () => (
  <>
    <Seo
      title='インターンシップ'
      description='BYU、BYUH、BYUIの学生のインターンシップ先の企業と給与についての調査結果です。誰もが知っている有名企業でインターンシップをする学生や、インターンシップにもかかわらず一般的な新入社員よりも給与を貰う学生もいます。'
      openGraph={{
        type: 'article',
        title: 'インターンシップ',
        description:
          'BYU、BYUH、BYUIの学生のインターンシップ先の企業と給与についての調査結果です。誰もが知っている有名企業でインターンシップをする学生や、インターンシップにもかかわらず一般的な新入社員よりも給与を貰う学生もいます。',
      }}
    />

    <InternshipPage />
  </>
);

export default _InternshipPage;
