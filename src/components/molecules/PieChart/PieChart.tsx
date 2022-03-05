import { Chart, ArcElement, Title, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import type { Options } from 'chartjs-plugin-datalabels/types/options';
import { ComponentPropsWithoutRef, useCallback, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { useScreenSize, gte, SCREEN_SIZE, ScreenSizeType } from '@l/screenSize';

Chart.register(ArcElement, Title);
Chart.register(ChartDataLabels);

/**
 * Props for PieChart
 */
export interface Props
  extends Omit<ComponentPropsWithoutRef<typeof Pie>, 'options'> {
  /** Chart title */
  title: string;
  /** Function to format label */
  labelCallback: Options['formatter'];
}

/**
 * Pie chart
 */
export const PieChart = ({ title, labelCallback, ...props }: Props) => {
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
      datalabels: {
        color: 'rgb(255, 255, 255)',
        backgroundColor: 'rgba(55, 48, 163, 0.2)',
        borderRadius: 4,
        formatter: labelCallback,
        textAlign: 'center',
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
