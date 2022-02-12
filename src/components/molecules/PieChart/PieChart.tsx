import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  Title,
  Tooltip,
  ChartOptions,
} from 'chart.js';
import { ComponentPropsWithoutRef, useCallback, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { useScreenSize, gte, SCREEN_SIZE, ScreenSizeType } from '@l/screenSize';

ChartJS.register(ArcElement, Legend, Title, Tooltip);

export interface Props
  extends Omit<ComponentPropsWithoutRef<typeof Pie>, 'options'> {
  title: string;
}

export const PieChart = ({ title, ...props }: Props) => {
  const [options, setOptions] = useState<ChartOptions<'pie'>>({
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: title,
      },
    },
  });

  const handler = useCallback((screenSize: ScreenSizeType) => {
    setOptions((prev) => ({
      ...prev,
      plugins: {
        ...prev.plugins,
        legend: {
          ...prev.plugins?.legend,
          position: gte(screenSize, SCREEN_SIZE.lg)
            ? ('right' as const)
            : ('bottom' as const),
        },
      },
    }));
  }, []);

  useScreenSize(handler);

  return <Pie options={options} {...props} />;
};
