import { FC } from 'react';
import { Container } from '@c/atoms/Container';
import { SplitPane } from '@c/atoms/SplitPane';
import { Pane } from '@c/atoms/Pane';
import { ExternalLink } from '@c/atoms/ExternalLink';
import { PageTitle } from '@c/atoms/PageTitle';
import { Section } from '@c/atoms/Section';
import SectionTitle from '@c/atoms/SectionTitle';
// import { PhotoViewer } from '@c/molecules/PhotoViewer';
import { Digit } from '@c/atoms/Digit';
// import { Mark } from '@c/atoms/Mark';
// import { List } from '@c/atoms/List';
// import { Item } from '@c/atoms/Item';
import { NextImage } from '@c/atoms/NextImage';
import CopiedDialog from '@c/organisms/CopiedDialog';
import byuiLogoImage from '@p/byui.png';
import { SchoolData } from '@d';

export interface Props {}

export const BYUIPage: FC<Props> = () => (
  <Container>
    <PageTitle>Brigham Young University - Idaho</PageTitle>

    <Section className='clear-both'>
      <SectionTitle id='概要'>概要</SectionTitle>
      <SplitPane>
        <Pane>
          <NextImage
            className='h-80'
            src={byuiLogoImage}
            alt='BYUI Logo'
            placeholder='blur'
            layout='fill'
            objectFit='scale-down'
          />
        </Pane>
        <Pane className='flex flex-col justify-center py-8 md:py-0'>
          <ul>
            <li className='py-2'>
              <strong className='font-bold'>場所</strong> :{' '}
              <ExternalLink href='https://www.google.com/maps/place/Brigham+Young+University/@40.2518435,-111.6515043,17z/data=!3m1!4b1!4m5!3m4!1s0x874d90bc4aa0b68d:0xbf3eb3a3f30fdc4c!8m2!3d40.2518435!4d-111.6493156'>
                アイダホ州レックスバーグ
              </ExternalLink>
            </li>
            <li className='py-2'>
              <strong className='font-bold'>合格率</strong> :{' '}
              <Digit>{SchoolData.byui.acceptanceRate * 100}</Digit>%
            </li>
            <li className='py-2'>
              <strong className='font-bold'>学生数</strong> :{' '}
              <Digit>{SchoolData.byui.numberOfStudents}</Digit>
            </li>
            <li className='py-2'>
              <strong className='font-bold'>専攻数</strong> :{' '}
              <Digit>{SchoolData.byui.numberOfMajors}</Digit>
            </li>
            <li className='py-2'>
              <strong className='font-bold'>授業数</strong> :{' '}
              <Digit>{SchoolData.byui.numberOfCourses}</Digit>
            </li>
          </ul>
        </Pane>
      </SplitPane>

      <p>
        BYUプロボから運転して約5時間ほどのところにあるBYUアイダホはレックスバーグという小さな市にあります。
        学生街に囲まれているため、レストランやゲームセンターなどちょっとした娯楽も近場で楽しめます。
      </p>
    </Section>

    <Section className='clear-both'>
      <SectionTitle id='専攻と授業'>専攻と授業</SectionTitle>
      <Pane>
        <div className='inline space-y-4'>
          <p>
            <ExternalLink href='https://www.byui.edu/catalog#/programs'>
              69のMajor(専攻)と95のMinor(副専攻)に加え多種類のCertificate
              (資格)やCluster(ある分野に関してまとまった授業)
            </ExternalLink>
            があります。
            必ず1つの専攻を決めなければいけません。学部によっては2年で卒業しassociate’s
            degree(准学士号)だけをとることもできます。大体の生徒はbachelor’s
            degree(学士号)をとるために通っています。
            学士号取得のためには120単位を取らなければなりませんが、大体の専攻は90単位以上から成り立つので、残りの30単位以下はelectivesという好きな授業を取れます。
            その中にはダンスや水泳、運動、料理の授業なども含まれています。（electivesの単位数は専攻によって異なります。）
          </p>
          <p>
            専攻は途中で変えることも可能です。しかし遅くになって変えてしまうと卒業も遅れてしまいます。また、専攻の中では看護学部のように選考が必要な選考もあります。
          </p>
          <p>
            留学生はACT／SATにより免除がない場合は留学生用の英語と数学の授業を取らなければなりません。
            英語に自信のある方でもし初級の数学や英語を取りたくない、という場合であればACT／SATの受験をおすすめします。この試験はいわゆるアメリカの高校生が受ける、日本でいうセンター試験なので全て英語で行われます。
          </p>
          <p>
            大体の授業は比較的小規模で10人〜40人程度で行われます。
            授業や先生によって異なりますが、授業でのグループワークは多い印象です。
            授業では英語力だけでなく、コミュニケーション力やチームワーク力を鍛えられます。
            また、先生たちは多くの大学教授のように研究と並行して教師を勤めるのではなく、これまでの経験を糧にして教師だけを本業としているので、生徒たちに全力を注いでくれます。
          </p>
        </div>
      </Pane>
    </Section>

    <Section className='clear-both'>
      <SectionTitle id='衣住食'>衣住食</SectionTitle>
      <Pane>
        <div className='inline space-y-4'>
          <p>
            アイダホは自然が多いので登山やキャンプを楽しむことが多いです。冬場は室内で友達と映画をみたりゲームをしたり色々楽しんでいます。
            また５時間運転してユタへ遊びに行くことこともできます。車のあてがなければバスや電車でも行くことができます。
            キャンパスのすぐ近くに神殿があるので気軽に行くことができます。
          </p>
        </div>
      </Pane>
    </Section>

    <Section className='clear-both'>
      <SectionTitle id='アイダホライフ'>アイダホライフ</SectionTitle>
      <Pane>
        <div className='inline space-y-4'>
          <p>
            アイダホ州では四季があり、冬は寒く、夏は暑いです。一番寒くて−10度、暑くて30度前半です。10月の後半から雪が降り始め、5月に雪が降ることも。防寒具は必須です。アメリカ人は半袖ででも外出しますが、極暖ヒートテックを必ず持って来ましょう。
          </p>
          <p>
            運転して10分ほどのところにウォールマート（スーパー）があります。車がなくても毎時間無料の送迎バスがあるので一般的な食料の調達は問題ありません。パン粉やカレーのルー、ラーメン、味噌汁、豆腐など日本食の材料はあります。その他スーパーで手に入らないものはネットでの購入するなど、ユタに行った際にアジアンマーケットに寄るなどの方法があります。日本食が恋しくなることもありますが、大体はアクセスのある食べ物で満足できます。それでもよく日本人がアメリカに持ってくるのはマヨネーズ、鶏ガラ、味覇など。味覇は入手困難です。
          </p>
          <p>
            学生街なのでアイスクリーム屋さん、クッキー屋さん、ピザ屋さんなどもあります。またお昼時間は学校の食堂でお昼ご飯を４ドル以上から買えます。
          </p>
          <p>
            家賃に関してはアイダホが３校の中で一番安いです。最安値で１セメスター（３ヶ月半）700ドルからのアパートがあります。しかし大体の平均は1100ドルから1400ドルです。セメスターによっても価格は異なります。
          </p>
        </div>
      </Pane>
    </Section>

    <Section className='clear-both'>
      <SectionTitle id='クラブ'>クラブ</SectionTitle>
      <Pane>
        <div className='inline space-y-4'>
          <p>
            クラブなどはないですが、短期間スポーツチームに所属を申し込むことでサッカー、バレーボール、フットボールなどいろんなスポーツが楽しめます。
            また、放課後にヨガクラス、ローラースケート、ダンス、レーザータッグなどの活動もあります。
          </p>
        </div>
      </Pane>
    </Section>

    <Section className='clear-both'>
      <SectionTitle id='アルバイト'>アルバイト</SectionTitle>
      <Pane>
        <div className='inline space-y-4'>
          <p>
            留学生はインターンシップ以外ではキャンパス内でしか働けません。
            その他ではオンラインで教師をしたりなどの方法もあります。
            キャンパス内ではキッチン、売店スタッフ、お掃除、イベントスタッフ、先生の助手としての仕事などがあります。
          </p>
        </div>
      </Pane>
    </Section>

    <Section className='clear-both'>
      <SectionTitle id='奨学金'>奨学金</SectionTitle>
      <Pane>
        <div className='inline space-y-4'>
          <p>
            Thomas E. Ricks
            Grantという奨学金があります。こちらは経済状況と成績を検討された上で奨学金受領が定められます。
          </p>
        </div>
      </Pane>
    </Section>

    <CopiedDialog />
  </Container>
);
