import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { FC, HTMLAttributes } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  options?: ChartOptions<'bar'>;
  data: ChartData<'bar'>;
  title: string;
}

export const defaultOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    xAxes: {
      grid: {
        display: false,
      },
    },
  },
};

export const BarChart: FC<Props> = ({
  data,
  title,
  options: _options = defaultOptions,
  ...props
}: Props) => {
  const options = {
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
  };

  return (
    <div {...props}>
      {/* prop types are any until https://github.com/reactchartjs/react-chartjs-2/issues/687 is merged */}
      <Bar data={data} options={options} />
    </div>
  );
};
