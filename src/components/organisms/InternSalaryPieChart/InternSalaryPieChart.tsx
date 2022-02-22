import { memo, ComponentPropsWithoutRef } from 'react';
import { DynamicPieChart } from '@cmp/organisms/DynamicPieChart';
import { INTERNSHIP_SALARY } from '@d/income';

interface Props
  extends Omit<
    ComponentPropsWithoutRef<typeof DynamicPieChart>,
    'data' | 'title'
  > {}

export const InternSalaryPieChart = memo((props: Props) => (
  <>
    <DynamicPieChart
      {...props}
      title='インターンシップの給与(月)'
      data={{
        labels: [
          '0円',
          '0 ~ 10万円',
          '10 ~ 20万円',
          '20 ~ 30万円',
          '30万円以上',
        ],
        datasets: [
          {
            data: [
              INTERNSHIP_SALARY._0,
              INTERNSHIP_SALARY._0to10,
              INTERNSHIP_SALARY._10to20,
              INTERNSHIP_SALARY._20to30,
              INTERNSHIP_SALARY._30over,
            ],
            backgroundColor: [
              'rgba(55, 48, 163, 0.2)',
              'rgba(55, 48, 163, 0.4)',
              'rgba(55, 48, 163, 0.6)',
              'rgba(55, 48, 163, 0.8)',
              'rgba(55, 48, 163, 1)',
            ],
            borderWidth: 0,
          },
        ],
      }}
    />
    <span className='sr-only'>
      BYU、BYUH、BYUIの学生のインターンシップの給与(月)
    </span>
  </>
));
