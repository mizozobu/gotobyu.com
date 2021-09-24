import { FC } from 'react';
import { IndexPage } from '@c/pages/IndexPage';
import { Seo } from '@c/organisms/Seo';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _IndexPage: FC<Props> = () => (
  <>
    <Seo
      description='BYU、BYUH、BYUIへの入学を考えている方に向けて、在学生と卒業生が入学前に知っておきたかった情報をまとめました。専攻、費用、アルバイト、奨学金、入学手続き、BYU3校の比較、英語の勉強方法、卒業後のキャリアなどについて紹介しています。'
      openGraph={{
        type: 'website',
        title: 'BYU Management Society Tokyo Chapter',
        description:
          'BYU、BYUH、BYUIへの入学を考えている方に向けて、在学生と卒業生が入学前に知っておきたかった情報をまとめました。専攻、費用、アルバイト、奨学金、入学手続き、BYU3校の比較、英語の勉強方法、卒業後のキャリアなどについて紹介しています。',
      }}
    />

    <IndexPage />
  </>
);

export default _IndexPage;
