import { FC, HTMLAttributes, useCallback, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import { useScreenSize, gte, ScreenSize } from '@l/ScreenSize';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  _options?: ChartOptions<'pie'>;
  data: ChartData<'pie'>;
  title: string;
}

export const defaultOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
};

export const PieChart: FC<Props> = ({
  data,
  title,
  _options = defaultOptions,
  ...props
}: Props) => {
  const [options, setOptions] = useState<ChartOptions<'pie'>>({
    ..._options,
    plugins: {
      ..._options.plugins,
      title: title
        ? {
            display: true,
            text: title,
          }
        : undefined,
    },
  });

  const handler = useCallback((screenSize) => {
    setOptions((prev) => ({
      ...prev,
      plugins: {
        ...prev.plugins,
        legend: {
          ...prev.plugins?.legend,
          position: gte(screenSize, ScreenSize.lg)
            ? ('right' as const)
            : ('bottom' as const),
        },
      },
    }));
  }, []);

  useScreenSize(handler);

  return (
    <div {...props}>
      <Pie data={data} options={options} />
    </div>
  );
};
