import { FC } from 'react';
import { ExternalLink } from '@c/atoms/ExternalLink';
import { Strong } from '@c/atoms/Strong';
import { Tab, TabContent, TabNav, TabNavBar, TabPane } from '@c/molecules/Tab';
import { TOEFLTable } from '@c/organisms/TOEFLTable';
import { IELTSTable } from '@c/organisms/IELTSTable';
import { PTETable } from '@c/organisms/PTETable';
import { EikenTable } from '@c/organisms/EikenTable';

export interface Props {}

export const EnglishTestTabs: FC<Props> = () => (
  <Tab>
    <TabNavBar>
      <TabNav
        id='toefl'
        className='flex items-center justify-center w-1/4 p-2 text-center font-bold'
      >
        TOEFL
      </TabNav>
      <TabNav
        id='ielts'
        className='flex items-center justify-center w-1/4 p-2 text-center font-bold'
      >
        IELTS
      </TabNav>
      <TabNav
        id='pte'
        className='flex items-center justify-center w-1/4 p-2 text-center font-bold'
      >
        PTE
      </TabNav>
      <TabNav
        id='英検'
        className='flex items-center justify-center w-1/4 p-2 text-center font-bold'
      >
        英検
      </TabNav>
    </TabNavBar>
    <TabContent>
      <TabPane
        id='toefl'
        className='px-4 md:px-8 py-8 border border-t-0 space-y-8'
      >
        <TOEFLTable />

        <p>
          <ExternalLink href='https://www.toefl-ibt.jp'>
            Test of English as a Foreign Language(TOEFL)
          </ExternalLink>
          はEducational Testing Service(ETS)が主催するテストです。
        </p>
      </TabPane>
      <TabPane
        id='ielts'
        className='px-4 md:px-8 py-8 border border-t-0 space-y-8'
      >
        <IELTSTable />

        <p>
          <ExternalLink href='https://www.eiken.or.jp/ielts/'>
            International English Language Testing System(IELTS)
          </ExternalLink>
          はBritish Council、IDP、Cambridge Assessment
          Englishが共同で主催するテストです。
        </p>
      </TabPane>
      <TabPane
        id='pte'
        className='px-4 md:px-8 py-8 border border-t-0 space-y-8'
      >
        <PTETable />

        <p>
          <ExternalLink href='https://pearsonpte.com/japanese'>
            Pearson Test of English(PTE)
          </ExternalLink>
          はPearsonが主催するテストです。
        </p>
      </TabPane>
      <TabPane
        id='英検'
        className='px-4 md:px-8 py-8 border border-t-0 space-y-8'
      >
        <EikenTable />

        <p>
          <ExternalLink href='https://www.eiken.or.jp/eiken/'>
            実用英語技能検定(英検)
          </ExternalLink>
          は公益財団法人日本英語検定協会が主催するテストです。英検は
          <Strong>BYUHでのみ</Strong>認められています。
        </p>
      </TabPane>
    </TabContent>
  </Tab>
);
