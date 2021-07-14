import { FC } from 'react';
import { PageTitle } from '@c/atoms/PageTitle';
import { IncomeBarChart } from '@c/organisms/IncomeBarChart';
import { InternSalaryPieChart } from '@c/organisms/InternSalaryPieChart';
import { SplitPane } from '@c/atoms/SplitPane';
import { Pane } from '@c/atoms/Pane';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _ComparePage: FC<Props> = () => (
  <main>
    <div className='container mx-auto px-8 md:px-16 lg:px-32 my-8 space-y-12 md:space-y-24'>
      <PageTitle>就職</PageTitle>

      <section>
        <h2 className='text-4xl font-bold mb-8'>インターンシップ</h2>
        <SplitPane>
          <Pane>
            <InternSalaryPieChart className='w-full h-72 md:h-80 lg:h-96' />
          </Pane>
          <Pane className='flex flex-col justify-center py-8 md:py-0'>
            <p>
              インターンシップとは、大学生として一定の期間（1～3ヶ月）会社に勤めるプログラム
              インターンシップの最後に、正社員内定がもらえる可能性
              ほとんどの場合は新入社員同等の給料がもらえる
              海外大学生限定のプログラムも多い
              国内大学生向けには3～5日の無給プログラムが普通
              大学の単位になる場合もある
              留学生はビザの問題で大学キャンパス外に働くことが普通はできないが、
              インターンシップに受かればできる
              BYU3校の学生・卒業生アンケート結果
              インターンシップの国はアメリカ・日本で50%ずつ
              インターンシップはBYUのキャリアイベント、あるいは知り合いなどの
              紹介から見つかったのが多い
              インターンシップ先の会社や職種、給料は次ページ
            </p>
            <br />
            <p>
              教会であれば、同じアメリカ私立大学の15％くらいしかかからないです（非教会員だと30％）。
            </p>
          </Pane>
        </SplitPane>
      </section>

      <section>
        <h2 className='text-4xl font-bold mb-8'>初任給</h2>
        <SplitPane>
          <Pane>
            <IncomeBarChart className='w-full h-72 md:h-80 lg:h-96' />
          </Pane>
          <Pane className='flex flex-col justify-center py-8 md:py-0'>
            asdf
          </Pane>
        </SplitPane>
      </section>
    </div>
  </main>
);

export default _ComparePage;
