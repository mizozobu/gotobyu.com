import { memo, ComponentPropsWithoutRef } from 'react';
import { PieChart } from '@cmp/molecules/PieChart';

interface Props
  extends Omit<ComponentPropsWithoutRef<typeof PieChart>, 'data' | 'title'> {}

export const InternSalaryPieChart = memo((props: Props) => (
  <PieChart
    {...props}
    title='インターシップ給与(月)'
    data={{
      labels: ['0円', '0 ~ 10万円', '10 ~ 20万円', '20 ~ 30万円', '30万円以上'],
      datasets: [
        {
          data: [22.7, 22.7, 13.6, 22.7, 18.2],
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
));
