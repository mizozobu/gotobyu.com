import { FC } from 'react';
import { Container } from '@c/atoms/Container';
import { SplitPane } from '@c/atoms/SplitPane';
import { Pane } from '@c/atoms/Pane';
import { ExternalLink } from '@c/atoms/ExternalLink';
import { PageTitle } from '@c/atoms/PageTitle';
import { Section } from '@c/atoms/Section';
import SectionTitle from '@c/atoms/SectionTitle';
import { PhotoViewer } from '@c/molecules/PhotoViewer';
import { Digit } from '@c/atoms/Digit';
import { Mark } from '@c/atoms/Mark';
import { List } from '@c/atoms/List';
import { Item } from '@c/atoms/Item';
import { NextImage } from '@c/atoms/NextImage';
import CopiedDialog from '@c/organisms/CopiedDialog';
import { SchoolData } from '@d';
import byuLogoImage from '@p/byu.png';
import archesNationalParkImage from '@p/byu/arches_national_park.jpg';
import byuFootballImage from '@p/byu/byu_football.jpg';
import canyonLandsNationalParkImage from '@p/byu/canyonlands_national_park.jpg';
import saltFlatsImage from '@p/byu/salt_flats.jpg';
import skiResortImage from '@p/byu/ski_resort.jpg';
import utahStateCapitalBuilding from '@p/byu/utah_state_capital_building.jpg';
import byuLargeClass from '@p/byu/large_class.jpg';

export interface Props {}

export const BYUPage: FC<Props> = () => (
  <Container>
    <PageTitle>Brigham Young University</PageTitle>

    <Section id='概要' className='clear-both'>
      <SectionTitle id='概要'>概要</SectionTitle>
      <SplitPane>
        <Pane>
          <NextImage
            className='h-80'
            src={byuLogoImage}
            alt='BYU Logo'
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
                ユタ州プロボ
              </ExternalLink>
            </li>
            <li className='py-2'>
              <strong className='font-bold'>合格率</strong> :{' '}
              <Digit>{SchoolData.byu.acceptanceRate * 100}</Digit>%
            </li>
            <li className='py-2'>
              <strong className='font-bold'>学生数</strong> :{' '}
              <Digit>{SchoolData.byu.numberOfStudents}</Digit>
            </li>
            <li className='py-2'>
              <strong className='font-bold'>専攻数</strong> :{' '}
              <Digit>{SchoolData.byu.numberOfMajors}</Digit>
            </li>
            <li className='py-2'>
              <strong className='font-bold'>授業数</strong> :{' '}
              <Digit>{SchoolData.byu.numberOfCourses}</Digit>
            </li>
          </ul>
        </Pane>
      </SplitPane>

      <Pane>
        <p>
          BYUはBYUH、BYUIに比べ生徒数や専攻数が多く、キャンパスの規模もとても大きいです。生徒数の95.5％をアメリカ人が占めており、アジア人生徒の割合が全体の3%程度です。その中でも日本人は韓国人や中国人に比べ少ないです。
          BYUはアメリカ国内でもトップを誇る魅力を持っており、
          <ExternalLink href=' https://www.byu.edu/facts-figures'>
            数々のランキング
          </ExternalLink>
          で上位に入っています。
        </p>

        <p>
          以下のランキングは数ある中のごく一部ですが、他にもクロスカントリー優勝(2021)、フットボール全米11位
          (2020)などスポーツでも活躍しています。
        </p>
      </Pane>

      <SplitPane>
        <Pane>
          <PhotoViewer
            className='mx-0 my-8 md:mr-8 md:float-left'
            colorClass='bg-gradient-to-br from-byu to-byu-dark'
            images={[
              {
                src: byuFootballImage,
                alt: 'BYU フットボール',
                placeholder: 'blur',
                layout: 'fill',
                objectFit: 'cover',
              },
            ]}
          />
        </Pane>
        <Pane className='flex items-center'>
          <List title='ランキング'>
            <Item>No.1: お金を費やす価値がある大学 (Wall Street Journal)</Item>
            <Item>
              No.1: 最高のトレーニングを受けたビジネス学卒業生 (Bloomberg
              Businessweek)
            </Item>
            <Item>
              No.2: 会計修士号プログラム (U.S. News &amp; World Report)
            </Item>
            <Item>No.2: 優れた大学図書館 (The Princeton Review)</Item>
            <Item>
              No.3: 起業学修士号プログラム(Entrepreneur/Princeton Review)
            </Item>
          </List>
        </Pane>
      </SplitPane>
    </Section>

    <Section id='専攻と授業' className='clear-both'>
      <SectionTitle id='専攻と授業'>専攻と授業</SectionTitle>
      <Pane>
        <PhotoViewer
          className='mx-0 my-8 md:mr-8 md:float-left'
          colorClass='bg-gradient-to-br from-byu to-byu-dark'
          images={[
            {
              // https://universe.byu.edu/2014/09/23/entrepreneurship-week-kicks-off-sept-29/
              src: byuLargeClass,
              alt: 'BYUの大きなクラス',
              placeholder: 'blur',
              layout: 'fill',
              objectFit: 'cover',
            },
          ]}
        />

        <div className='inline space-y-4'>
          <p>
            BYUには
            <ExternalLink href='https://catalog.byu.edu/majors'>
              186のMajor(専攻)と110のMinor(副専攻)
            </ExternalLink>
            があり、基本的には自由に選択することができます。
            一部の人気のある専攻では、希望者全員がその専攻を選択できるわけではなく、
            <Mark>選考プロセス</Mark>が用意されています。
            各専攻で決められているPrerequisitesと呼ばれるクラスを修了し、GPAとエッセイで選考を受けなければなりません。
            選考が<Mark>1年に1度</Mark>
            しか行われない専攻もあるので、Prerequisitesが終わらずに選考を受けられなくならないように、計画的に授業を取る必要があります。
          </p>
          <p>
            授業は20人程度の小規模のものから、800人を超えるような大規模なクラスもあります。
            <ExternalLink href='https://catalog.byu.edu/policy/registration'>
              留学生は各学期12単位以上(Spring/Summerは6単位)
            </ExternalLink>
            取る必要があり、一般的に平均的な成績を取るためには授業を含めて
            <Mark>毎週3時間/単位</Mark>の勉強時間が必要とされています。
          </p>
        </div>
      </Pane>
    </Section>

    <Section id='衣住食' className='clear-both'>
      <SectionTitle id='衣住食'>衣住食</SectionTitle>
      <Pane>
        <div className='inline space-y-4'>
          <p>
            日本と違い全てにおいて規模が大きいアメリカでの生活となると車は必須なのでは？と思う方もいらっしゃると思います。もちろん車があることに越したことはないのですが、BYU生徒は電車やバスが無料で使えるのでお買い物や通学などにとても便利です。また、プロボから北の方へ走っている電車も無料で利用できるので、ソルトレレイクにも気軽に遊びに行くことができます。
          </p>
          <p>
            また、日本の運転免許を持っておられる方は
            <Mark>ユタの免許 への書き換え</Mark>
            も簡単にできます。テキストブックを見ながら受けられるペーパーテストと簡単な実技テストを受けます。コストも5000円以下で安く済むので生活に慣れた頃、車を購入することを検討してみても良いかもしれません。
          </p>
          <p>
            また、日本食などを取り扱っているアジアンマーケットがプロボにもあり日本食やお菓子など恋しくなっても心配なし。美味しいお寿司やラーメンが食べられるレストランもあります。
          </p>
        </div>
      </Pane>
    </Section>

    <Section id='ユタライフ' className='clear-both'>
      <SectionTitle id='ユタライフ'>ユタライフ</SectionTitle>
      <Pane>
        <div className='inline space-y-4'>
          <PhotoViewer
            className='mx-0 my-8 md:mr-8 md:float-left'
            colorClass='bg-gradient-to-br from-byu to-byu-dark'
            images={[
              {
                src: utahStateCapitalBuilding,
                alt: 'ユタ州会議事堂',
                placeholder: 'blur',
                layout: 'fill',
                objectFit: 'cover',
              },
              {
                src: archesNationalParkImage,
                alt: 'アーチーズ国立公園',
                placeholder: 'blur',
                layout: 'fill',
                objectFit: 'cover',
              },
              {
                src: canyonLandsNationalParkImage,
                alt: 'キャニオンランズ国立公園',
                placeholder: 'blur',
                layout: 'fill',
                objectFit: 'cover',
              },
              {
                src: saltFlatsImage,
                alt: 'ソルトフラッツ',
                placeholder: 'blur',
                layout: 'fill',
                objectFit: 'cover',
              },
              {
                src: skiResortImage,
                alt: 'スキー場',
                placeholder: 'blur',
                layout: 'fill',
                objectFit: 'cover',
              },
            ]}
          />
          <p>
            ユタはとても自然に恵まれており様々な楽しみ方があります。
            春にはユタの州都市ソルトレイクで桜を楽しめます。日本にいなくても日本の春の風物詩をユタでも堪能できるのはとても嬉しいです。
            暖かくなると、ハイキングやキャンプなどを楽しめる山がたくさんあります。キャンパス付近にもたくさんありますが、やはり
            <ExternalLink href='https://www.nps.gov/state/ut/index.htm'>
              ユタの国立公園
            </ExternalLink>
            も訪れたいものです。ブライスキャニオン、ザイオン、アーチーズナショナルパークなど壮大な自然が楽しめるのもユタの魅力です。他にもソルトフラッツやキャニオンなど見どころいっぱいです。
          </p>
          <p>
            ユタは
            <ExternalLink href='https://www.skiutah.com/'>
              全米屈指のスキー場
            </ExternalLink>
            が多々あり、プロボから車で一時間程で行ける場所もあります。日本のスキー場では味わえない最高な雪質の壮大なゲレンデを滑ればあなたもユタ好きになること間違いなし。
          </p>
          <p>
            また、ユタには多くの神殿がありプロボ神殿はキャンパスからとても近いです。学校後や休みの日に気軽に神殿に訪れられるのもユタに住む方にとって大きな祝福に一つです。
          </p>
        </div>
      </Pane>
    </Section>

    <Section id='クラブ' className='clear-both'>
      <SectionTitle id='クラブ'>クラブ</SectionTitle>
      <Pane>
        <div className='inline space-y-4'>
          <p>
            BYUには、<Mark>楽しむことが目的のBYUSAクラブ</Mark>と、
            <Mark>就活、進学、研究が目的のAcademicクラブ</Mark>があり、 合計で
            <ExternalLink href='https://clubs.byu.edu/'>312クラブ</ExternalLink>
            が存在します。
          </p>
          <p>
            BYUSAクラブでは、サイクリングをしたり、映画を見たりと同じ趣味を持つ人が集まって楽しい活動をします。
          </p>
          <p>
            Academicクラブでは、就活関連のワークショップを開催したり、企業を招いて会社説明会を開催したりします。
            クラブでの活動を通じて<Mark>インターンシップや内定を獲得</Mark>
            する人も少なくないです。
            <Mark>有名企業からスポンサー</Mark>
            されているクラブもあるので、クラブ活動を通してコネクションを広げる機会にもなります。
          </p>
        </div>
      </Pane>
    </Section>

    <Section id='アルバイト' className='clear-both'>
      <SectionTitle id='アルバイト'>アルバイト</SectionTitle>
      <Pane>
        <div className='inline space-y-4'>
          <p>
            ほとんどの生徒がアルバイトと学業を両立しています。日本人生徒に人気なのは、MTCで宣教師をトレーニングする教師、BYUで日本語を学ぶ外国人を教える日本語クラスのティーチングアシスタント、掃除の仕事などです。たくさんの仕事の機会を通して様々なスキルや経験を身につけ将来の職業へ生かしましょう。
          </p>
        </div>
      </Pane>
    </Section>

    <Section id='奨学金' className='clear-both'>
      <SectionTitle id='奨学金'>奨学金</SectionTitle>
      <Pane>
        <div className='inline space-y-4'>
          <p>
            <ExternalLink href='https://enrollment.byu.edu/financial-aid/applying-for-scholarships'>
              BYUの奨学金
            </ExternalLink>
            はGPAやその他の貢献度によって、<Mark>授業料の半額か全額</Mark>
            が給付される可能性があります。
            毎年奨学金が給付されるGPAのボーダーが変わるため、申し込むまで貰えるかどうかは分かりません。
            以前は選考後に奨学金が給付された生徒の平均GPAが公開されていましたが、非公開になりました。
            <ExternalLink href='https://universe.byu.edu/2017/06/20/scholarship-gpa-cutoffs-raise-students-disappointed1/'>
              過去のデータ
            </ExternalLink>
            を見ても<Mark>かなり選考基準が高い</Mark>
            ことが分かるので、運がよければ貰える程度に捉えておきましょう。
            奨学金の選考に参加するには、年度ごとに申し込む必要があります(エッセイは任意)。
            場合によっては締切が学期の始まる9ヶ月前に設定されているので、予め確認しておいたほうが良いです。
          </p>
          <p>
            他にも
            <ExternalLink href='https://enrollment.byu.edu/financial-aid/international-student-scholarships'>
              留学生対象の奨学金
            </ExternalLink>
            や
            <ExternalLink href='https://enrollment.byu.edu/financial-aid/byu-college-departmental-scholarships'>
              学部ごとの奨学金
            </ExternalLink>
            もあるのでアンテナを張っておきましょう。
          </p>
        </div>
      </Pane>
    </Section>

    <CopiedDialog />
  </Container>
);
