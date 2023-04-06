import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { PieChartLoader } from './PieChartLoader';

const meta = {
  title: 'components/molecules/PieChartLoader',
  component: PieChartLoader,
  argTypes: {},
} satisfies Meta<typeof PieChartLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof PieChartLoader> = (args) => (
  <div className='h-64 w-96'>
    <PieChartLoader {...args} />
  </div>
);

export const Example: Story = {
  render: Template,
  args: {},
};
