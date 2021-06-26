import { FC } from 'react';
import { Table } from '@c/atoms/Table';
import { TableCaption } from '@c/atoms/TableCaption';
import { TuitionBarChart } from '@c/organisms/TuitionBarChart';
import { SplitPane } from '@c/atoms/SplitPane';
import { Pane } from '@c/atoms/Pane';
import { Mark } from '@c/atoms/Mark';
import { NextImage } from '@c/atoms/NextImage';

export interface Props {}

const data = {
  byu: {
    tuition: 640000,
    housing: 840000,
    books: 100000,
    personal: 260000,
    transportation: 270000,
  },
  byuh: {
    tuition: 640000,
    housing: 107000,
    books: 220000,
    personal: 330000,
    transportation: 220000,
  },
  byui: {
    tuition: 470000,
    housing: 800000,
    books: 50000,
    personal: 260000,
    transportation: 140000,
  },
};

// eslint-disable-next-line no-underscore-dangle
const _ComparePage: FC<Props> = () => (
  <main>
    <div className='container mx-auto px-8 md:px-16 lg:px-32 my-8 space-y-12 md:space-y-24'>
      <h1 className='text-5xl font-bold my-4'>BYU、BYUH、BYUI比較</h1>

      <section>
        <h2 className='text-4xl font-bold mb-8'>
          BYU、日本の大学、アメリカの大学の学費を比較
        </h2>
        <SplitPane>
          <Pane>
            <TuitionBarChart className='w-full h-72 md:h-80 lg:h-96' />
          </Pane>
          <Pane className='flex flex-col justify-center py-8 md:py-0'>
            <p>
              BYU3校の学費は<Mark>日本公立の平均と近い</Mark>です。
              非教会員ですと、日本の私立の学費に近いです。
              学費にはそこまでの違いがないですが、一般的に日本の大学とアメリカの留学を選ぶこ都にかかる費用が違ったりしますのでそちらを
              あと、日本の大学と違ってアメリカの大学は入学費用がないですが、留学をすることにあたって飛行機代
            </p>
            <br />
            <p>
              教会であれば、同じアメリカ私立大学の15％くらいしかかからないです（非教会員だと30％）。
            </p>
          </Pane>
        </SplitPane>
      </section>

      <section>
        <h2 className='text-4xl font-bold mb-8'>BYU各校の年間費用</h2>
        <Pane>
          <Table className='my-2 px-0'>
            <TableCaption>BYU各校の年間費用</TableCaption>
            <thead>
              <tr>
                <th scope='col'>{}</th>
                <th scope='col'>
                  <NextImage
                    className='h-full p-4'
                    src='/byu.png'
                    alt='BYU Logo'
                    layout='fill'
                    objectFit='scale-down'
                  />
                  <span className='text-byu'>BYU</span>
                </th>
                <th scope='col'>
                  <NextImage
                    className='h-full p-4'
                    src='/byuh.png'
                    alt='BYUH Logo'
                    layout='fill'
                    objectFit='scale-down'
                  />
                  <span className='text-byuh'>BYUH</span>
                </th>
                <th scope='col'>
                  <NextImage
                    className='h-full p-4'
                    src='/byui.png'
                    alt='BYUI Logo'
                    layout='fill'
                    objectFit='scale-down'
                  />
                  <span className='text-byui'>BYUI</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>学費</th>
                <td>&yen;{data.byu.tuition.toLocaleString()}</td>
                <td>&yen;{data.byuh.tuition.toLocaleString()}</td>
                <td>&yen;{data.byu.tuition.toLocaleString()}</td>
              </tr>
              <tr>
                <th scope='row'>家賃と食費</th>
                <td>&yen;{data.byu.housing.toLocaleString()}</td>
                <td>&yen;{data.byuh.housing.toLocaleString()}</td>
                <td>&yen;{data.byui.housing.toLocaleString()}</td>
              </tr>
              <tr>
                <th scope='row'>教科書費</th>
                <td>&yen;{data.byu.books.toLocaleString()}</td>
                <td>&yen;{data.byuh.books.toLocaleString()}</td>
                <td>&yen;{data.byui.books.toLocaleString()}</td>
              </tr>
              <tr>
                <th scope='row'>生活費</th>
                <td>&yen;{data.byu.personal.toLocaleString()}</td>
                <td>&yen;{data.byuh.personal.toLocaleString()}</td>
                <td>&yen;{data.byui.personal.toLocaleString()}</td>
              </tr>
              <tr>
                <th scope='row'>交通費</th>
                <td>&yen;{data.byu.transportation.toLocaleString()}</td>
                <td>&yen;{data.byuh.transportation.toLocaleString()}</td>
                <td>&yen;{data.byui.transportation.toLocaleString()}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th scope='row'>合計</th>
                <td>
                  &yen;
                  {Object.values(data.byu)
                    .reduce((accumulate, current) => accumulate + current)
                    .toLocaleString()}
                </td>
                <td>
                  &yen;
                  {Object.values(data.byuh)
                    .reduce((accumulate, current) => accumulate + current)
                    .toLocaleString()}
                </td>
                <td>
                  &yen;
                  {Object.values(data.byui)
                    .reduce((accumulate, current) => accumulate + current)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </Table>
        </Pane>
      </section>
    </div>
  </main>
);

export default _ComparePage;
