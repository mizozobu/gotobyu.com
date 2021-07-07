import { FC } from 'react';
import { SplitPane } from '@c/atoms/SplitPane';
import { Pane } from '@c/atoms/Pane';
import { ExternalLink } from '@c/atoms/ExternalLink';
import { Section } from '@c/atoms/Section';
import SectionTitle from '@c/atoms/SectionTitle';
import { PhotoViewer } from '@c/molecules/PhotoViewer';
import { Number } from '@c/atoms/Number';
import { Mark } from '@c/atoms/Mark';
import { List } from '@c/atoms/List';
import { Item } from '@c/atoms/Item';
import { NextImage } from '@c/atoms/NextImage';

export interface Props {}

export const BYUPage: FC<Props> = () => (
  <main>
    <div className='container mx-auto px-8 md:px-16 lg:px-32 my-8 space-y-12 md:space-y-24'>
      <h1 className='text-5xl font-bold my-4'>Brigham Young University</h1>

      <Section id='概要' className='clear-both'>
        <SectionTitle id='概要'>概要</SectionTitle>
        <SplitPane>
          <Pane>
            <NextImage
              className='h-80'
              src='/byu.png'
              alt='BYU Logo'
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
                <Number>{68}</Number>%
              </li>
              <li className='py-2'>
                <strong className='font-bold'>学生数</strong> :{' '}
                <Number>{36024}</Number>
              </li>
              <li className='py-2'>
                <strong className='font-bold'>専攻数</strong> :{' '}
                <Number>{186}</Number>
              </li>
              <li className='py-2'>
                <strong className='font-bold'>授業数</strong> :{' '}
                <Number>{5763}</Number>
              </li>
            </ul>
            <br />
            <p className='text-xs text-right'>
              <ExternalLink href='https://www.usnews.com/best-colleges/byu-3670/overall-rankings'>
                ※ U.S. Newsアメリカ大学ランキングより
              </ExternalLink>
            </p>
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
            以上のランキングは数ある中のごく一部ですが、他にもクロスカントリー優勝(2021)、フットボール全米11位
            (2020)などスポーツでも活躍しています。
          </p>
        </Pane>

        <SplitPane>
          <Pane>
            <PhotoViewer
              className='mx-0 my-8 md:mr-8 md:float-left'
              colorClass='bg-byu'
              images={[
                {
                  src: '/byu/byu_football.jpg',
                  alt: 'BYU フットボール',
                  layout: 'fill',
                  objectFit: 'cover',
                },
              ]}
            />
          </Pane>
          <Pane className='flex items-center'>
            <List title='ランキング'>
              <Item>
                No.1: お金を費やす価値がある大学 (Wall Street Journal)
              </Item>
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
          <div className='inline space-y-4'>TBD</div>
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
              また、日本の運転免許を持っておられる方は<Mark>ユタの免許</Mark>
              への書き換えも簡単にできます。テキストブックを見ながら受けられるペーパーテストと簡単な実技テストを受けます。コストも5000円以下で安く済むので生活に慣れた頃、車を購入することを検討してみても良いかもしれません。
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
              colorClass='bg-byu'
              images={[
                {
                  src: '/byu/utah_state_capital_building.jpg',
                  alt: 'ユタ州会議事堂',
                  layout: 'fill',
                  objectFit: 'cover',
                },
                {
                  src: '/byu/arches_national_park.jpg',
                  alt: 'アーチーズ国立公園',
                  layout: 'fill',
                  objectFit: 'cover',
                },
                {
                  src: '/byu/canyonlands_national_park.jpg',
                  alt: 'キャニオンランズ国立公園',
                  layout: 'fill',
                  objectFit: 'cover',
                },
                {
                  src: '/byu/salt_flats.jpg',
                  alt: 'ソルトフラッツ',
                  layout: 'fill',
                  objectFit: 'cover',
                },
                {
                  src: '/byu/ski_resort.jpg',
                  alt: 'スキー場',
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
        <Pane>TBD</Pane>
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
            <p>TBD</p>
          </div>
        </Pane>
      </Section>
    </div>
  </main>
);
