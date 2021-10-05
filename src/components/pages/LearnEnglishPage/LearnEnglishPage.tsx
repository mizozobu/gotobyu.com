import { FC } from 'react';
import CopiedDialog from '@c/organisms/CopiedDialog';
import { Container } from '@c/atoms/Container';
import { Pane } from '@c/atoms/Pane';
import { ExternalLink } from '@c/atoms/ExternalLink';
import { InternalLink } from '@c/atoms/InternalLink';
import { PageTitle } from '@c/atoms/PageTitle';
import { Section } from '@c/atoms/Section';
import SectionTitle from '@c/molecules/SectionTitle';
import { Strong } from '@c/atoms/Strong';
import { List } from '@c/atoms/List';
import { Item } from '@c/atoms/Item';

export interface Props {}

export const LearnEnglishPage: FC<Props> = () => (
  <Container>
    <PageTitle>英語の勉強方法</PageTitle>

    <Section className='clear-both'>
      <SectionTitle id='必要な英語力'>必要な英語力</SectionTitle>
      <Pane className='space-y-4'>
        <p>
          日本の義務教育を受けただけで英語を話せるようになる人が皆無であることから分かるように、普通の高校レベルの英語ではアメリカの大学では全く通用しません。
          センター試験の英語で9割取れるような
          <Strong>
            優等生でもTOEFLなどのテストで入学基準を満たすのは無理でしょう
          </Strong>
          。 実際の大学生活を送るのに必要なレベルが求められます。
        </p>

        <List>
          <Item>英語で教科書が読めること</Item>
          <Item>英語で論文を書けること</Item>
          <Item>英語でプレゼンテーションができること</Item>
          <Item>英語の授業を理解できること</Item>
        </List>
      </Pane>
    </Section>

    <Section className='clear-both'>
      <SectionTitle id='英語の勉強方法'>英語の勉強方法</SectionTitle>
      <Pane className='space-y-4'>
        <p>
          入学基準を満たすためには、高校までの単語力は文法が理解できていることを前提により実用的な英語の勉強が必要です。
          TOEFLなどのテストでは以下のの4つのカテゴリーで英語力が測られます。
        </p>

        <List>
          <Item>Reading</Item>
          <Item>Writing</Item>
          <Item>Speaking</Item>
          <Item>Listening</Item>
        </List>

        <p>
          どのカテゴリーについても<Strong>慣れる</Strong>ことが重要です。
          SpeakingとListeningは、ホームステイや英語学校に通うことで3~6ヶ月も英語の環境に身を置けばある程度は慣れるでしょう。
          しかし、日常生活で読み書きをする機会は多くはないので、ReadingとWritingは英語の環境で生活するだけでは伸びにくいことがあります。
          ReadingとWritingを伸ばすには日記を書いたり、本を読んだりして意図的に読み書きの機会を増やす必要があります。
        </p>
      </Pane>
    </Section>

    <Section className='clear-both'>
      <SectionTitle id='英語学校'>英語学校</SectionTitle>
      <Pane className='space-y-8'>
        <p>
          英語に慣れるための選択肢の1つが英語学校に通うことです。BYU、BYUH、BYUIを目指す人が行くことが多い英語学校を紹介します。
        </p>

        <div className='md:ml-8 space-y-8'>
          <div>
            <h3 className='mb-4 text-xl font-bold'>みくに国際学園</h3>
            <p>
              元BYU教授によって設立された英語学校です。
              新潟県南魚沼郡湯沢町で英語だけで共同生活をしながら英語を学びます。
              オンラインのコースも用意されています。
              みくに国際学園について詳しくは
              <ExternalLink href='https://www.mikunijapan.org'>
                こちら
              </ExternalLink>
              から。
            </p>
          </div>

          <div>
            <h3 className='mb-4 text-xl font-bold'>
              English Language Center(ELC)
            </h3>
            <p>
              BYUが運営する英語学校です。
              BYUのTESOLの大学院生もしくは大学院卒業生が英語を教えます。
              ELCの生徒はBYUの施設を一部使用できますが、BYUの生徒ではありません。
              ELCについて詳しくは
              <ExternalLink href='https://elc.byu.edu/home/program-description-japanese/'>
                こちら
              </ExternalLink>
              から。
            </p>
          </div>

          <div>
            <h3 className='mb-4 text-xl font-bold'>
              Selnate International School
            </h3>
            <p>
              BYUの近くにある英語学校です。
              BYUとは提携していません。セレネートについて詳しくは
              <ExternalLink href='https://elc.byu.edu/home/program-description-japanese/'>
                こちら
              </ExternalLink>
              から。
            </p>
          </div>

          <div>
            <h3 className='mb-4 text-xl font-bold'>
              Brigham Young University–Hawaii
            </h3>
            <p>
              BYUHは英語学校ではありませんが、英検で入学ができることと、English
              as an International
              Language(EIL)という留学生向けの英語のクラスがあることを考えると、英語学校を内包した大学と言えるでしょう。
              初めのうちははEILクラスを多めに取り、徐々に普通科目を増やしていくという流れになっています。
            </p>
            <p>
              BYUHについて詳しくは
              <InternalLink href='/byuh' className='text-indigo-500 font-bold'>
                こちら
              </InternalLink>
              から。
            </p>
          </div>
        </div>
      </Pane>
    </Section>

    <CopiedDialog />
  </Container>
);
