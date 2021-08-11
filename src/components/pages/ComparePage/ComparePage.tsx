import React, { FC } from 'react';
import CopiedDialog from '@c/organisms/CopiedDialog';
import { Container } from '@c/atoms/Container';
import { PageTitle } from '@c/atoms/PageTitle';
import { Pane } from '@c/atoms/Pane';
import { ExternalLink } from '@c/atoms/ExternalLink';
import { Section } from '@c/atoms/Section';
import SectionTitle from '@c/atoms/SectionTitle';
import { InternalLink } from '@c/atoms/InternalLink';
import CostTable from '@c/organisms/CostTable';
import { SchoolTable } from '@c/organisms/SchoolTable';
import TuitionBarChart from '@c/organisms/TuitionBarChart';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
export const ComparePage: FC<Props> = () => (
  <Container>
    <PageTitle>
      <span className='text-byu'>BYU</span>、
      <span className='text-byuh'>BYUH</span>、
      <span className='text-byui'>BYUI</span>
      を比較
    </PageTitle>

    <Section id='学校データ' className='clear-both'>
      <SectionTitle id='学校データ'>学校データ</SectionTitle>
      <Pane>
        <SchoolTable />
      </Pane>
    </Section>

    <Section id='入学に必要な英語力' className='clear-both'>
      <SectionTitle id='入学に必要な英語力'>入学に必要な英語力</SectionTitle>
      <Pane className='space-y-8'>
        <InternalLink href='http://localhost:3000/apply#入学に必要な英語力'>
          こちらを参照。
        </InternalLink>
      </Pane>
    </Section>

    <Section id='学費' className='clear-both'>
      <SectionTitle id='学費'>学費</SectionTitle>
      <Pane>
        <TuitionBarChart className='w-full h-72 md:h-80 lg:h-96' />
        <ul className='mt-4 list-asterisk text-xs'>
          <li>BYU、BYUIは2学期分、BYUHは3学期分で換算</li>
          <li>
            日本国立、日本私立は
            <ExternalLink href='https://www.mext.go.jp/a_menu/koutou/shinkou/07021403/__icsFiles/afieldfile/2017/12/26/1399613_03.pdf'>
              国公私立大学の授業料等の推移
            </ExternalLink>
            より平成29年度の値
          </li>
          <li>
            US国立、US私立は
            <ExternalLink href='https://www.usnews.com/education/best-colleges/paying-for-college/articles/paying-for-college-infographic'>
              See the Average College Tuition in 2020-2021
            </ExternalLink>
            より
          </li>
        </ul>
      </Pane>
    </Section>

    <Section id='1学期の費用' className='clear-both'>
      <SectionTitle id='1学期の費用'>1学期の費用</SectionTitle>
      <Pane>
        <CostTable />
      </Pane>
    </Section>

    <CopiedDialog />
  </Container>
);
