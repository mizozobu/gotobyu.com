import { FC } from 'react';
import { Container } from '@c/atoms/Container';
import { PageTitle } from '@c/atoms/PageTitle';
import { Section } from '@c/atoms/Section';
import SectionTitle from '@c/atoms/SectionTitle';
import { SplitPane } from '@c/atoms/SplitPane';
import { Pane } from '@c/atoms/Pane';
import { Mark } from '@c/atoms/Mark';
import { List } from '@c/atoms/List';
import { Item } from '@c/atoms/Item';
import { InternSalaryPieChart } from '@c/organisms/InternSalaryPieChart';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
export const InternshipPage: FC<Props> = () => (
  <Container>
    <PageTitle>インターンシップ</PageTitle>

    <Section id='インターンシップの給与' className='clear-both'>
      <SectionTitle id='インターンシップの給与'>
        インターンシップの給与
      </SectionTitle>

      <SplitPane className='space-y-8'>
        <Pane>
          <InternSalaryPieChart className='w-full h-72 md:h-80 lg:h-96' />
          <p className='text-xs'>※ 独自調査に基づく</p>
        </Pane>
        <Pane>
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
        </Pane>
      </SplitPane>
    </Section>

    <Section id='インターンシップ先' className='clear-both'>
      <SectionTitle id='インターンシップ先'>インターンシップ先</SectionTitle>

      <Pane>
        <p>インターンシップ先の例は以下の通りです。</p>
      </Pane>
      <SplitPane className='space-y-4 md:space-y-0'>
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
    </Section>
  </Container>
);
