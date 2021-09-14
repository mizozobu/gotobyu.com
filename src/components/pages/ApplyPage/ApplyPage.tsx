import { FC } from 'react';
import CopiedDialog from '@c/organisms/CopiedDialog';
import { Container } from '@c/atoms/Container';
import { Pane } from '@c/atoms/Pane';
import { ExternalLink } from '@c/atoms/ExternalLink';
import { PageTitle } from '@c/atoms/PageTitle';
import { Section } from '@c/atoms/Section';
import SectionTitle from '@c/atoms/SectionTitle';
import { Mark } from '@c/atoms/Mark';
import { Tab, TabContent, TabNav, TabNavBar, TabPane } from '@c/molecules/Tab';
import { NextImage } from '@c/atoms/NextImage';
import { List } from '@c/atoms/List';
import { Item } from '@c/atoms/Item';
import { TOEFLTable } from '@c/organisms/TOEFLTable';
import { IELTSTable } from '@c/organisms/IELTSTable';
import { PTETable } from '@c/organisms/PTETable';
import { EikenTable } from '@c/organisms/EikenTable';
import { BYUDeadlineTable } from '@c/organisms/BYUDeadlineTable';
import { BYUHDeadlineTable } from '@c/organisms/BYUHDeadlineTable';
import { BYUIDeadlineTable } from '@c/organisms/BYUIDeadlineTable';
import byuLogoImage from '@p/byu.png';
import byuhLogoImage from '@p/byuh.png';
import byuiLogoImage from '@p/byui.png';

export interface Props {}

export const ApplyPage: FC<Props> = () => (
  <Container>
    <PageTitle>入学手続き</PageTitle>

    <Section id='申込方法' className='clear-both'>
      <SectionTitle id='申込方法'>申込方法</SectionTitle>
      <Pane>
        <div className='space-y-4'>
          <p>
            BYU、BYUH、BYUIも全て
            <ExternalLink href='https://www.churchofjesuschrist.org/church-education/apply-to-church-schools?lang=eng'>
              このウェブサイト
            </ExternalLink>
            から申し込みをします。基本的にウェブサイト上での指示に従い、手続きを進めます。
          </p>
        </div>
      </Pane>
    </Section>

    <Section id='申込締切' className='clear-both'>
      <SectionTitle id='申込締切'>申込締切</SectionTitle>
      <Pane>
        <Tab>
          <TabNavBar>
            <TabNav
              id='byu'
              className='flex items-center justify-center w-1/3 p-2'
            >
              <NextImage
                className='hidden md:block w-8 h-8 mr-8'
                src={byuLogoImage}
                alt='BYU Logo'
                placeholder='blur'
                layout='fill'
                objectFit='scale-down'
              />
              <span className='text-byu font-bold'>BYU</span>
            </TabNav>
            <TabNav
              id='byuh'
              className='flex items-center justify-center w-1/3 p-2'
            >
              <NextImage
                className='hidden md:block w-8 h-8 mr-8'
                src={byuhLogoImage}
                alt='BYUH Logo'
                placeholder='blur'
                layout='fill'
                objectFit='scale-down'
              />
              <span className='text-byuh font-bold'>BYUH</span>
            </TabNav>
            <TabNav
              id='byui'
              className='flex items-center justify-center w-1/3 p-2'
            >
              <NextImage
                className='hidden md:block w-8 h-8 mr-8'
                src={byuiLogoImage}
                alt='BYUI Logo'
                placeholder='blur'
                layout='fill'
                objectFit='scale-down'
              />
              <span className='text-byui font-bold'>BYUI</span>
            </TabNav>
          </TabNavBar>
          <TabContent>
            <TabPane
              id='byu'
              className='px-4 md:px-8 py-8 border border-t-0 space-y-8'
            >
              <BYUDeadlineTable />

              <p>
                優先申込締切までに申込を完了すると選考を有利に進められます。
              </p>

              <List title='参考' className='list-disc list-inside'>
                <Item>
                  <ExternalLink href='https://enrollment.byu.edu/admissions/deadlines'>
                    BYUの申込締切
                  </ExternalLink>
                </Item>
                <Item>
                  <ExternalLink href='https://enrollment2.byu.edu/academic-calendar'>
                    BYUの年間カレンダー
                  </ExternalLink>
                </Item>
              </List>
            </TabPane>
            <TabPane
              id='byuh'
              className='px-4 md:px-8 py-8 border border-t-0 space-y-8'
            >
              <BYUHDeadlineTable />

              <List title='参考' className='list-disc list-inside'>
                <Item>
                  <ExternalLink href='https://hookele.byuh.edu/application-deadlines-decisions-schedule'>
                    BYUHの申込締切
                  </ExternalLink>
                </Item>
                <Item>
                  <ExternalLink href='https://registrar.byuh.edu/academic-dates'>
                    BYUHの年間カレンダー
                  </ExternalLink>
                </Item>
              </List>
            </TabPane>
            <TabPane
              id='byui'
              className='px-4 md:px-8 py-8 border border-t-0 space-y-8'
            >
              <BYUIDeadlineTable />

              <p>
                優先申込締切までに申込を完了すると選考を有利に進められます。
              </p>

              <List title='参考' className='list-disc list-inside'>
                <Item>
                  <ExternalLink href='https://hookele.byuh.edu/application-deadlines-decisions-schedules'>
                    BYUIの申込締切
                  </ExternalLink>
                </Item>
                <Item>
                  <ExternalLink href='https://www.byui.edu/student-records/academic-deadlines'>
                    BYUIの年間カレンダー
                  </ExternalLink>
                </Item>
              </List>
            </TabPane>
          </TabContent>
        </Tab>
      </Pane>
    </Section>

    <Section id='申込費用' className='clear-both'>
      <SectionTitle id='申込費用'>申込費用</SectionTitle>
      <Pane>
        <p>
          申込費用は1校につき<Mark>$35</Mark>です。
        </p>
      </Pane>
    </Section>

    <Section id='入学に必要な英語力' className='clear-both'>
      <SectionTitle id='入学に必要な英語力'>入学に必要な英語力</SectionTitle>
      <Pane>
        <div className='space-y-8'>
          <p>
            必須の英語力は各大学でそれぞれ違い、
            <Mark>BYUH、BYUI、BYUの順に高くなります</Mark>。
            主なテストの点数は下の表に記載していますが、他のテストも受け入れられているので各学校のウェブサイトを確認してください。
            直近の受験日の予約が満席になっていたり、受験から結果が出るまでに時間がかかったりするので余裕を持って受験しておきましょう。
          </p>
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
                  <Mark>BYUHでのみ</Mark>認められています。
                </p>
              </TabPane>
            </TabContent>
          </Tab>

          <List title='参考' className='list-disc list-inside'>
            <Item>
              <ExternalLink href='https://enrollment.byu.edu/admissions/english-proficiency-requirement'>
                BYUの必須英語力
              </ExternalLink>
            </Item>
            <Item>
              <ExternalLink href='https://hookele.byuh.edu/admissions/english-test-requirements'>
                BYUHの必須英語力
              </ExternalLink>
            </Item>
            <Item>
              <ExternalLink href='https://www.byui.edu/admissions/apply/international-students/english-requirements'>
                BYUIの必須英語力
              </ExternalLink>
            </Item>
          </List>
        </div>
      </Pane>
    </Section>

    <Section id='エッセイ' className='clear-both'>
      <SectionTitle id='エッセイ'>エッセイ</SectionTitle>
      <Pane>
        <p>
          「人生で一番大変だったこと」や「入学したらどのようなことをしたいか」などについて
          <Mark>英語でエッセイ</Mark>を書く必要があります。
          在学生、卒業生などの英語が分かる人に添削してもらうと良いでしょう。エッセイのお題は各学校で異なるので、実際のオンラインの申込書で確認してください。
        </p>
      </Pane>
    </Section>

    <Section id='SAT/ACT' className='clear-both'>
      <SectionTitle id='SAT/ACT'>SAT/ACT</SectionTitle>
      <Pane className='space-y-4'>
        <p>
          アメリカの大学は共通の入学試験のみで、大学ごとの入学試験がありません。
          共通の入学試験は2種類あり、
          <ExternalLink href='http://global.act.org'>ACT</ExternalLink>か
          <ExternalLink href='https://collegereadiness.collegeboard.org/sat'>
            SAT
          </ExternalLink>
          のどちらかを選べます。日本のセンター試験のようなものですが、ACTとSATは
          <Mark>何度も受験することができて自分の最高点を大学に提出する</Mark>
          形式になっています。
          <Mark>BYUHとBYUIでは留学生は免除</Mark>
          されていますが、BYUに申し込むにはこのテストを受ける必要があります。
        </p>

        <p>
          ACTとSATはアメリカの高校生に混ざってセンター試験を英語で受験するようなものなので、日本人がACT/SATで点数を取るには相当の準備が必要になります。
          BYUに入学してくるアメリカ人はGPAが4.0(日本のオール5)に近い人ばかりなので、
          <ExternalLink href='https://enrollment.byu.edu/admissions/entrance-averages'>
            必要な点数
          </ExternalLink>
          もかなりレベルが高いです。 一方で、
          他の大学で24単位以上取得した学生の編入にはSAT/ACTの条件が不要です。
          そのため
          <Mark>
            BYUには直接の入学ではなくBYUHかBYUIで24単位以上取得してから編入
          </Mark>
          をする人がほとんどです。
        </p>

        <p>
          新型コロナウイルスの影響でBYUでは
          <ExternalLink href='https://enrollment.byu.edu/admissions/educational-history'>
            2024年の冬学期まではACT/SATの点数を提出する必要がない
          </ExternalLink>
          と発表されています。もしかするとこれは日本人が直接BYUに入学する絶好の機会なのかもしれません。
        </p>
      </Pane>
    </Section>

    <Section id='教会の推薦' className='clear-both'>
      <SectionTitle id='教会の推薦'>教会の推薦</SectionTitle>
      <Pane className='space-y-8'>
        <p>
          <Mark>
            末日聖徒イエス・キリスト教会の会員であるかどうかに関わらず
          </Mark>
          、末日聖徒イエス・キリスト教会の指導者と面接をする必要があります 。
          会員は自分のワード、ステークの指導者と面接を行います。 会員でない人は
          <ExternalLink href='https://www.churchofjesuschrist.org/maps/meetinghouses/'>
            このウェブサイト
          </ExternalLink>
          から近くの末日聖徒イエス・キリスト教会を探し、面接の予約をします。教会の推薦を受けるためにはHonor
          Codeに従う必要があります。
        </p>

        <List title='参考' className='list-disc list-inside'>
          <Item>
            <ExternalLink href='https://policy.byu.edu/view/index.php?p=26'>
              BYUのHonor Code
            </ExternalLink>
          </Item>
          <Item>
            <ExternalLink href='https://honorcode.byuh.edu'>
              BYUHのHonor Code
            </ExternalLink>
          </Item>
          <Item>
            <ExternalLink href='https://www.byui.edu/student-honor-office/ces-honor-code'>
              BYUIのHonor Code
            </ExternalLink>
          </Item>
        </List>
      </Pane>
    </Section>

    <Section id='成績表と卒業証明書' className='clear-both'>
      <SectionTitle id='成績表と卒業証明書'>成績表と卒業証明書</SectionTitle>
      <Pane>
        <p>Coming Soon...</p>
      </Pane>
    </Section>

    <CopiedDialog />
  </Container>
);
