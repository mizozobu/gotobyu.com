import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BarChart } from './BarChart';

const meta = {
  title: 'components/molecules/BarChart',
  component: BarChart,
  argTypes: {},
} satisfies Meta<typeof BarChart>;

const Template: StoryFn<typeof BarChart> = (args) => (
  <div className='h-64 w-96'>
    <BarChart {...args} />
  </div>
);

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: Template,
  args: {
    title: 'Title',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
          ],
          borderWidth: 1,
        },
      ],
    },
  },
};

export const WithLabel: Story = {
  render: Template,
  args: {
    ...Example.args,
    enableDataLable: true,
    labelCallback: (value) => `${value}%`,
  },
};

export const WithTooltip: Story = {
  render: Template,
  args: {
    ...Example.args,
    enableTooltip: true,
  },
};

export const CustomYAxes: Story = {
  render: Template,
  args: {
    ...Example.args,
    yAxesTicksCallback: (value) => `${value}%`,
  },
};
