import { FC } from 'react';
import { Container } from '@c/atoms/Container';
import { PageTitle } from '@c/atoms/PageTitle';
import { Section } from '@c/atoms/Section';
import SectionTitle from '@c/atoms/SectionTitle';
import { SplitPane } from '@c/atoms/SplitPane';
import { Pane } from '@c/atoms/Pane';
import { ExternalLink } from '@c/atoms/ExternalLink';
import { Mark } from '@c/atoms/Mark';
import { List } from '@c/atoms/List';
import { Item } from '@c/atoms/Item';
import { IncomeBarChart } from '@c/organisms/IncomeBarChart';
import { InternSalaryPieChart } from '@c/organisms/InternSalaryPieChart';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _ComparePage: FC<Props> = () => (
  <main>
    <Container>
      <PageTitle>キャリア</PageTitle>

      <Section id='年収' className='clear-both'>
        <SectionTitle id='年収'>年収</SectionTitle>

        <SplitPane className='space-y-8'>
          <Pane>
            <IncomeBarChart className='w-full h-72 md:h-80 lg:h-96' />
            <p className='mt-4 text-xs'>
              ※ 大卒年収は令和2年賃金構造基本統計調査より
              <ExternalLink href='https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00450091&tstat=000001011429&cycle=0&tclass1=000001152186&tclass2=000001152187&tclass3=000001152195&stat_infid=000032069485&tclass4val=0'>
                新規学卒者の学歴別所定内給与額
              </ExternalLink>
              の大学卒の給与額の12倍に
              <ExternalLink href='https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00450091&tstat=000001011429&cycle=0&tclass1=000001152186&tclass2=000001152187&tclass3=000001152188&stat_infid=000032069351&cycle_facet=cycle&tclass4val=0'>
                学歴、年齢階級、勤続年数階級別所定内給与額及び年間賞与その他特別給与額
              </ExternalLink>
              の20-24歳の平均賞与額を加算
            </p>
            <p className='text-xs'>※ BYU年収は独自調査に基づく</p>
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
        <SectionTitle id='就職先'>就職先</SectionTitle>

        <div className='space-y-8'>
          <Pane>
            <p>卒業生の就職先の例は以下の通りです。</p>
          </Pane>
          <SplitPane className='space-y-4'>
            <Pane className='space-y-4'>
              <List title='テクノロジー'>
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
        </div>
      </Section>

      <Section id='インターンシップ' className='clear-both'>
        <SectionTitle id='インターンシップ'>インターンシップ</SectionTitle>

        <div className='space-y-8'>
          <SplitPane className='space-y-8'>
            <Pane>
              <InternSalaryPieChart className='w-full h-72 md:h-80 lg:h-96' />
            </Pane>
            <Pane className='space-y-4'>
              <p>
                アメリカでは大学在学中に企業で実務を経験するインターンシップを行うのが一般的です。
                1～3ヶ月間実際に勤務し、
                <Mark>新入社員同等の給料を支払われます</Mark>。
                大学で単位として認定される場合もあったり、インターンシップ後に
                <Mark>内定に直結</Mark>したりと得られることは多いです。
                留学生は基本的にキャンパス外で働くことはできませんが、OPTやCPTという制度が適用されるためインターンシップ期間中はキャンパス外で働くことができます。
                日本では数日間の無休の会社説明会をインターンシップと履き違えている企業が多いので注意が必要です。
                BYU、BYUH、BYUIの学生は大学のキャリアイベントや知人の紹介からインターンシップを獲得することが多いです。
                インターンシップ先の国はアメリカと日本で半々になっています。
              </p>
              <p>インターンシップ先の例は以下の通りです。</p>
            </Pane>
          </SplitPane>

          <SplitPane className='space-y-4'>
            <Pane>
              <List title='日本'>
                <Item>Apple</Item>
                <Item>Bloomberg</Item>
                <Item>Deutsche Securities</Item>
                <Item>EY</Item>
                <Item>Franklin Covey</Item>
                <Item>KPMG</Item>
                <Item>PwC</Item>
              </List>
            </Pane>
            <Pane>
              <List title='アメリカ'>
                <Item>Espalhar LLC</Item>
                <Item>Honu Hawaii Activities</Item>
                <Item>Theodore Roosevelt Medora Foundation</Item>
                <Item>Vivint</Item>
              </List>
            </Pane>
          </SplitPane>
        </div>
      </Section>
    </Container>
  </main>
);

export default _ComparePage;
