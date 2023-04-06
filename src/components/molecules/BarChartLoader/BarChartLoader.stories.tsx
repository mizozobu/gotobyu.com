import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BarChartLoader } from './BarChartLoader';

const meta = {
  title: 'components/molecules/BarChartLoader',
  component: BarChartLoader,
  argTypes: {},
} satisfies Meta<typeof BarChartLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof BarChartLoader> = (args) => (
  <div className='h-64 w-96'>
    <BarChartLoader {...args} />
  </div>
);

export const Example: Story = {
  render: Template,
  args: {
    barCount: 9,
  },
};
