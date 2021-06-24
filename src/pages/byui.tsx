import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { SplitPane, Pane } from '@c/SplitPane';
import { ExternalLink } from '@c/ExternalLink';
import { Section } from '@c/Section';
import SectionTitle from '@c/SectionTitle';
import { PhotoViewer } from '@c/PhotoViewer';
import { Number } from '@c/Number';
import { Mark } from '@c/Mark';
import { Title } from '@c/Title';
import { List, Item } from '@c/List';

export interface Props {}

const BYUPage: FC<Props> = () => (
  <>
    <Title>BYUIの紹介</Title>
    <Head>
      <meta
        name='description'
        content='Brigham Young University - Idaho(BYUI)についての紹介です。在学生と卒業生の経験を元に、専攻、衣住食、クラブ、アルバイト、奨学金について深堀りします。'
      />
    </Head>

    <main>
      <div className='container mx-auto px-8 md:px-16 lg:px-32 my-8 space-y-12 md:space-y-24'>
        <h1 className='text-5xl font-bold my-4'>
          Brigham Young University - Idaho
        </h1>

        <Section id='概要' className='clear-both'>
          <SectionTitle id='概要'>概要</SectionTitle>
          <SplitPane>
            <Pane>
              <div className='relative h-80'>
                <Image
                  src='/byui.png'
                  alt='BYUI Logo'
                  layout='fill'
                  objectFit='scale-down'
                />
              </div>
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
                  <Number>{97}</Number>%
                </li>
                <li className='py-2'>
                  <strong className='font-bold'>学生数</strong> :{' '}
                  <Number>{19400}</Number>
                </li>
                <li className='py-2'>
                  <strong className='font-bold'>専攻数</strong> :{' '}
                  <Number>{96}</Number>
                </li>
                <li className='py-2'>
                  <strong className='font-bold'>授業数</strong> :{' '}
                  <Number>{2076}</Number>
                </li>
              </ul>
            </Pane>
          </SplitPane>

          <p>
            ワイキキから車で1時間ほどのノースショアの小さな町Laieにある大学です。
            世界中70カ国以上から留学生が集い、
            <ExternalLink href='https://about.byuh.edu/00000177-1ce4-d89c-af77-7df626210000/20-11-09-quickfactsupdate-pdf'>
              約半数が留学生
            </ExternalLink>
            という国際色豊かな大学です。
            日本人留学生も多く、常に100人は在学しています。
          </p>
        </Section>

        <Section id='専攻と授業' className='clear-both'>
          <SectionTitle id='専攻と授業'>専攻と授業</SectionTitle>
          <Pane>
            <div className='inline space-y-4'>
              <PhotoViewer
                className='mx-0 my-8 md:mr-8 md:float-left'
                colorClass='bg-byui'
                images={[
                  {
                    src: '/byuh/byuh_class.jpg',
                    alt: 'BYUH 授業風景',
                    layout: 'fill',
                    objectFit: 'cover',
                  },
                ]}
              />
              <p>
                <ExternalLink href='https://holokai.byuh.edu/programs-of-study'>
                  65のMajor(専攻)と60のMinor(副専攻)と13のCertificate(検定)
                </ExternalLink>
                の中から、<Mark>1つのMajorと2つのMinor/Certificate</Mark>
                を取る必要があります。
                ハワイならではの観光学、海洋生物学などもあります。
                途中で専攻を変えることは自由ですが、
                <ExternalLink href='https://catalog.byuh.edu/enrollment-policy'>
                  入学から4年以内に卒業しなければならない
                </ExternalLink>
                という決まりがあるため、頻繁に専攻を変えると卒業が難しくなるので注意が必要です(インターシップや伝道は考慮されます)。
              </p>
              <p>
                <Mark>
                  留学生は初めはEIL(English as an International
                  Language)という英語のクラスを取らされ
                </Mark>
                、論文の書き方やプレゼンの仕方などの大学生活に必要な英語力を身に着けます(TOEFL
                iBT80点以上の英語力を証明できればEILをスキップできますが、初めからそんなに英語ができる日本人はいないでしょう)。
                <Mark>余裕があれば自分の興味のある授業を取ることができる</Mark>
                のが、他の英語学校よりもおすすめできるポイントです。
              </p>
              <p>
                <Mark>授業は小規模で10人~20人</Mark>
                のクラスがほとんどのため、クラスメートと仲良くなりやすいです。
                課題の量は日本の大学よりは多いですが、しっかり取り組めば週末は遊びに行く時間は確保できるでしょう。
              </p>

              <List title='日本人に人気の専攻'>
                <Item>Accounting(会計学)</Item>
                <Item>Business Management(経営学)</Item>
                <Item>TESOL(英語が母国語ではない人への英語教育)</Item>
                <Item>Elementary Education(小学校教育)</Item>
                <Item>Music(音楽)</Item>
              </List>
            </div>
          </Pane>
        </Section>

        <Section id='衣住食' className='clear-both'>
          <SectionTitle id='衣住食'>衣住食</SectionTitle>
          <Pane>
            <div className='inline space-y-4'>
              <PhotoViewer
                className='mx-0 my-8 md:mr-8 md:float-left'
                colorClass='bg-byui'
                images={[
                  {
                    src: '/byuh/byuh_dress_and_grooming.jpg',
                    alt: 'BYUH 服装',
                    layout: 'fill',
                    objectFit: 'cover',
                  },
                  {
                    src: '/byuh/byuh_housing.jpg',
                    alt: 'BYUH 学生寮',
                    layout: 'fill',
                    objectFit: 'cover',
                  },
                ]}
              />
              <p>
                年間を通じて最高気温が25℃~30℃と常夏のため、服装は
                <Mark>Tシャツに短パンにサンダル</Mark>という軽装の人が多いです。
                しかし、図書館で冷房が効きすぎていたときや、夜の冷え込みに備えて長袖を用意しておいたほうが良いでしょう。
                キャンパス内の移動は徒歩かスケートボードを使う人が多いです。
              </p>
              <p>
                <ExternalLink href='https://residentiallife.byuh.edu/single-on-campus-housing-information'>
                  BYUHの規則
                </ExternalLink>
                では、新入生は
                <Mark>初めの3学期はHaleと呼ばれる学生寮に住む</Mark>
                ことになっています。
                Haleは2人部屋になっていて、さらに3部屋6人で共用するキッチン、トイレ、シャワーがついています。
                4学期目からはBYUHキャンパスの外(オフキャンパス)に部屋を借りることができます。
                Haleでもオフキャンパスでもすぐ近くに友達がいるので、楽しく生活できる環境になっています。
                結婚した夫婦はTemple View Apartment(TVA)に住むことができます。
              </p>
              <p>
                レストランなどの一部のアルバイトではまかないがつくところがありますが、食事は基本的にはBYUHのカフェテリアで済ませるか、自炊をするかの二択です。
                カフェテリアには
                <ExternalLink href='https://foodservices.byuh.edu/meal-plan'>
                  Meal Plan
                </ExternalLink>
                と呼ばれる1学期間有効なサブスクリプションが用意されていて、
                プランによってカフェテリアに入れる曜日が決まっていたり、食事ができる回数が決まっていたりします。
                <Mark>Haleに住む場合はMeal Planはほぼ必須</Mark>となっています。
                自炊をする場合は、BYUHから徒歩10分の
                <ExternalLink href='https://www.google.com/maps/place/Foodland+Laie/@21.6455179,-157.9251959,17z/data=!3m1!5s0x7c004566a0800ef3:0x1ce5d36423696c70!4m9!1m2!2m1!1sfoodland!3m5!1s0x0:0xd784d0a736efbefd!8m2!3d21.6470891!4d-157.9225214!15sCghmb29kbGFuZCIDiAEBWgoiCGZvb2RsYW5kkgELc3VwZXJtYXJrZXSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUlZPVGxRY2xGbkVBRQ'>
                  Foodland
                </ExternalLink>
                で食材を調達できます。 ハワイということもあり、
                <Mark>物価が高い</Mark>です。
                日本食が恋しくなったときは、車かバスで片道1~2時間かけて
                <ExternalLink href='https://www.google.com/maps/search/don+quijote/@21.3443858,-158.0008819,12z/data=!3m1!4b1'>
                  ドン・キホーテ
                </ExternalLink>
                まで行けば、大抵のものは揃います。
              </p>
            </div>
          </Pane>
        </Section>

        <Section id='クラブ' className='clear-both'>
          <SectionTitle id='クラブ'>クラブ</SectionTitle>
          <Pane>
            <div className='inline space-y-4'>
              <PhotoViewer
                className='mx-0 my-8 md:mr-8 md:float-left'
                colorClass='bg-byui'
                images={[
                  {
                    src: '/byuh/byuh_culturenight.jpg',
                    alt: 'BYUH クラブ カルチャーナイト',
                    layout: 'fill',
                    objectFit: 'cover',
                  },
                  {
                    src: '/byuh/byuh_food_festa.jpg',
                    alt: 'BYUH クラブ フードフェスタ',
                    layout: 'fill',
                    objectFit: 'cover',
                  },
                  {
                    src: '/byuh/byuh_bbq.jpg',
                    alt: 'BYUH クラブ バーベキュー',
                    layout: 'fill',
                    objectFit: 'cover',
                  },
                  {
                    src: '/byuh/byuh_resume_workshop.jpg',
                    alt: 'BYUH クラブ 企業研究会',
                    layout: 'fill',
                    objectFit: 'cover',
                  },
                ]}
              />
              <p>
                BYUHの学生クラブは<Mark>国ごとのクラブ</Mark>
                が主になっています。
                各国の食べ物を販売するフードフェスタや、ダンスなどのパフォーマンスをするカルチャーナイトは毎年開催され、各国のクラブが積極的に盛り上げます。
                他の国のクラブに入れば、異なる文化を学ぶ良い経験になるでしょう。
              </p>
              <p>
                もちろん日本人クラブ(
                <ExternalLink href='https://www.facebook.com/groups/465567126808469'>
                  Japan Student Chapter
                </ExternalLink>
                )も活発に活動しています。
                BBQやハロウィーンパーティーなどの楽しいアクティビティから、ゴスペルフォーラムや企業研究会などの真面目な活動まで、様々な活動がが開催されます。
              </p>
              <p>
                BYUHのクラブは
                <ExternalLink href='https://byuh.campuslabs.com/engage/organizations'>
                  BYUHのウェブサイト
                </ExternalLink>
                から確認できます。
              </p>
            </div>
          </Pane>
        </Section>

        <Section id='アルバイト' className='clear-both'>
          <SectionTitle id='アルバイト'>アルバイト</SectionTitle>
          <Pane>
            <div className='inline space-y-4'>
              <PhotoViewer
                className='mx-0 my-8 md:mr-8 md:float-left'
                colorClass='bg-byui'
                images={[
                  {
                    src: '/byuh/byuh_tour_guide.jpg',
                    alt: 'BYUH アルバイト ツアーガイド',
                    layout: 'fill',
                    objectFit: 'cover',
                  },
                  {
                    src: '/byuh/byuh_luau.jpg',
                    alt: 'BYUH アルバイト レストラン',
                    layout: 'fill',
                    objectFit: 'cover',
                  },
                ]}
              />
              <p>
                <ExternalLink href='https://hr.byuh.edu/student-employment'>
                  BYUHの規則
                </ExternalLink>
                では、 学校期間中は<Mark>週19時間まで</Mark>{' '}
                、夏休みなどの休業期間には週40時間までアルバイトをすることができます。
                留学生はビザの関係でキャンパス内でしか働くことができませんが、
                BYUHでは隣接する
                <ExternalLink href='https://www.polynesia.com'>
                  ポリネシアカルチャーセンター
                </ExternalLink>
                でも働くことができます。
              </p>

              <p>
                <ExternalLink href='https://labor.hawaii.gov/wsd/minimum-wage/'>
                  ハワイ州の最低賃金
                </ExternalLink>
                は<Mark>$10.10</Mark>で近年上昇傾向にあります。
                キャンパス内のアルバイトでも最低賃金は保証されているため、目一杯働くと
              </p>
              <p className='text-center'>$10.10 x 19時間 x 4週間 = $767.6</p>
              <p>
                となり、ここから税金が引かれるものの家賃と食費程度の金額は手元に残るでしょう。
              </p>

              <p>
                アルバイトでは英語を使うことになりますが、中には日本語を教えたり、日本人観光客を相手にしたりと日本語を使うものもあります。
                英語力に不安のある学生でも雇ってもらえるアルバイトもあるので、興味のある人は積極的に挑戦してみてください。
                学年が上がりスキルも付いてくると、自分の専攻に関連するような仕事にも挑戦できます。
                BYUHのアルバイトのポジションには以下のようなものがあります。
              </p>

              <List title='ポリネシアカルチャーセンター'>
                <Item>ショーのダンサー</Item>
                <Item>マーケティングスタッフ</Item>
                <Item>ツアーガイド</Item>
                <Item>レストランのウェイター</Item>
                <Item>売店の店員</Item>
              </List>

              <List title='BYUHキャンパス'>
                <Item>会計監査補佐</Item>
                <Item>大学広報部スタッフ</Item>
                <Item>日本語チューター</Item>
                <Item>カフェテリアのスタッフ</Item>
                <Item>清掃スタッフ</Item>
              </List>
            </div>
          </Pane>
        </Section>

        <Section id='奨学金' className='clear-both'>
          <SectionTitle id='奨学金'>奨学金</SectionTitle>
          <Pane>
            <div className='inline space-y-4'>
              <p>
                BYUHには累計のGPA(アメリカの大学の4段階評価制度)次第で貰うことができる
                <ExternalLink href='https://financialaid.byuh.edu/current-returning-student-scholarships'>
                  Merit Scholarship
                </ExternalLink>
                があります。
                <Mark>GPAに応じて授業料の1/4~全額の奨学金が貰えます</Mark>
                。貰うためには最低でもGPAが3.65必要ですが、努力すれば届く範囲なので、積極的に狙っていきましょう。
                他にも
                <ExternalLink href='https://financialaid.byuh.edu/scholarships'>
                  様々な奨学金制度
                </ExternalLink>
                がありますが、日本人が対象になるものは少ないです。
              </p>
              <p>
                貧しい家族の学生のために
                <ExternalLink href='https://financialaid.byuh.edu/iwork'>
                  IWORK
                </ExternalLink>
                という授業料、住居費等を大学が負担してくれる特別な奨学金制度もあります。
                家族の収入が十分でないことを証明する必要があるため、本当に必要としている学生のための制度です。
              </p>
            </div>
          </Pane>
        </Section>
      </div>
    </main>
  </>
);

export default BYUPage;
