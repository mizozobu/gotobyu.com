import { memo } from 'react';
import { Footnote } from '@cmp/atoms/Footnote';
import { DynamicBarChart } from '@cmp/organisms/DynamicBarChart';
import { MDX } from '@l/mdx';

export const IncomeBarChart = memo(() => (
  <>
    <div className='h-72 md:h-80 lg:h-96'>
      <DynamicBarChart
        title='新卒1年目の年収'
        data={{
          labels: ['大卒平均', 'BYUs卒平均'],
          datasets: [
            {
              data: [22.6 * 12 + 48.21, 523],
              backgroundColor: [
                'rgba(55, 48, 163, 0.2)',
                'rgba(55, 48, 163, 1)',
              ],
              borderColor: ['rgba(55, 48, 163, 1)', 'rgba(55, 48, 163, 1)'],
              borderWidth: 1,
            },
          ],
        }}
        yAxesTicksCallback={(value) => `${value.toLocaleString()}万円`}
      />
    </div>

    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <MDX.ul className='mt-4 text-xs'>
      <Footnote>
        大卒年収は令和2年賃金構造基本統計調査より
        <MDX.a href='https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00450091&tstat=000001011429&cycle=0&tclass1=000001152186&tclass2=000001152187&tclass3=000001152195&stat_infid=000032069485&tclass4val=0'>
          新規学卒者の学歴別所定内給与額
        </MDX.a>
        の大学卒の給与額の12倍に
        <MDX.a href='https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00450091&tstat=000001011429&cycle=0&tclass1=000001152186&tclass2=000001152187&tclass3=000001152188&stat_infid=000032069351&cycle_facet=cycle&tclass4val=0'>
          学歴、年齢階級、勤続年数階級別所定内給与額及び年間賞与その他特別給与額
        </MDX.a>
        の20-24歳の平均賞与額を加算
      </Footnote>
      <Footnote>BYUs卒年収は独自調査に基づく</Footnote>
    </MDX.ul>
  </>
));
