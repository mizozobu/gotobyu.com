import type { Meta, StoryObj } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import { TuitionBarChart } from './TuitionBarChart.client';

const meta = {
  title: 'features/compare/TuitionBarChart',
  component: TuitionBarChart,
  argTypes: {},
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} satisfies Meta<typeof TuitionBarChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    exrate: 100,
  },
};
