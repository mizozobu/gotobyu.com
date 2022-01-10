import { useCallback, useState, FC, HTMLAttributes } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  Title,
  Tooltip,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { useScreenSize, gte, SCREEN_SIZE, ScreenSizeType } from '@l/screenSize';

ChartJS.register(ArcElement, Legend, Title, Tooltip);

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

  return (
    <div {...props}>
      <Pie data={data} options={options} />
    </div>
  );
};
