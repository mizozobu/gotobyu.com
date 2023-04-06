import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { PieChart } from './PieChart';

const meta = {
  title: 'components/molecules/PieChart',
  component: PieChart,
  argTypes: {},
} satisfies Meta<typeof PieChart>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof PieChart> = (args) => (
  <div className='h-64 w-64'>
    <PieChart {...args} />
  </div>
);

export const Example: Story = {
  render: Template,
  args: {
    title: 'Title',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
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
    labelCallback: (value: number) => `${value}%`,
  },
};

export const WithTooltip: Story = {
  render: Template,
  args: {
    ...Example.args,
    enableTooltip: true,
  },
};
