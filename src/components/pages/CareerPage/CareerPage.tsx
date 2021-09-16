import { FC } from 'react';
import CopiedDialog from '@c/organisms/CopiedDialog';
import { Container } from '@c/atoms/Container';
import { PageTitle } from '@c/atoms/PageTitle';
import { Section } from '@c/atoms/Section';
import SectionTitle from '@c/atoms/SectionTitle';
import { SplitPane } from '@c/atoms/SplitPane';
import { Pane } from '@c/atoms/Pane';
import { ExternalLink } from '@c/atoms/ExternalLink';
import { List } from '@c/atoms/List';
import { Item } from '@c/atoms/Item';
import { IncomeBarChart } from '@c/organisms/IncomeBarChart';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
export const CareerPage: FC<Props> = () => (
  <Container>
    <PageTitle>キャリア</PageTitle>

    <Section id='年収' className='clear-both'>
      <SectionTitle>年収</SectionTitle>

      <SplitPane className='space-y-8'>
        <Pane>
          <IncomeBarChart className='w-full h-72 md:h-80 lg:h-96' />
          <ul className='mt-4 list-asterisk text-xs'>
            <li>
              大卒年収は令和2年賃金構造基本統計調査より
              <ExternalLink href='https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00450091&tstat=000001011429&cycle=0&tclass1=000001152186&tclass2=000001152187&tclass3=000001152195&stat_infid=000032069485&tclass4val=0'>
                新規学卒者の学歴別所定内給与額
              </ExternalLink>
              の大学卒の給与額の12倍に
              <ExternalLink href='https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00450091&tstat=000001011429&cycle=0&tclass1=000001152186&tclass2=000001152187&tclass3=000001152188&stat_infid=000032069351&cycle_facet=cycle&tclass4val=0'>
                学歴、年齢階級、勤続年数階級別所定内給与額及び年間賞与その他特別給与額
              </ExternalLink>
              の20-24歳の平均賞与額を加算
            </li>
            <li>BYU年収は独自調査に基づく</li>
          </ul>
        </Pane>
        <Pane className='flex items-center'>
          <p>
            BYU、BYUH、BYUIの学生はCFNの開催する
            <ExternalLink href='https://careerforum.net/ja/'>
              ボストンキャリアフォーラム
            </ExternalLink>
            などの日本人留学生向けのイベントを通して内定を獲得する人が多いです。
            外資系企業に就職することが多く、大卒1年目の年収は大卒平均の1.5倍以上となっています。
          </p>
        </Pane>
      </SplitPane>
    </Section>

    <Section id='就職先' className='clear-both'>
      <SectionTitle>就職先</SectionTitle>

      <Pane>
        <p>卒業生の就職先の例は以下の通りです。</p>
      </Pane>
      <SplitPane className='space-y-4 md:space-y-0'>
        <Pane className='space-y-4'>
          <List title='IT'>
            <Item>Amazon</Item>
            <Item>Booking.com</Item>
            <Item>IBM</Item>
            <Item>Indeed</Item>
            <Item>Microsoft</Item>
            <Item>Novell</Item>
            <Item>Tableau</Item>
          </List>
          <List title='コンサルティング'>
            <Item>Bain &amp; Company</Item>
            <Item>A.T. Kearney</Item>
          </List>
          <List title='会計'>
            <Item>Deloitte</Item>
            <Item>EY</Item>
            <Item>KPMG</Item>
            <Item>PwC</Item>
          </List>
        </Pane>
        <Pane className='space-y-4'>
          <List title='金融'>
            <Item>Deutsche Securities Inc.</Item>
            <Item>JPMorgan Chase &amp; Co.</Item>
            <Item>UBS証券</Item>
          </List>
          <List title='その他'>
            <Item>Nomen Global Language Center</Item>
            <Item>National Instruments</Item>
            <Item>末日聖徒イエス・キリスト教会</Item>
          </List>
        </Pane>
      </SplitPane>
    </Section>

    <CopiedDialog />
  </Container>
);
