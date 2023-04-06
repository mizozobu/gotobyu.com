import type { Meta, StoryObj } from '@storybook/react';
import { Pane } from '@/components/atoms/Pane';
import { SplitPane } from './SplitPane';

const meta = {
  title: 'components/atoms/SplitPane',
  component: SplitPane,
  argTypes: {},
} satisfies Meta<typeof SplitPane>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: (
      <>
        <Pane className='bg-indigo-100 py-24'>Left Pane</Pane>
        <Pane className='flex items-center bg-indigo-200'>Right Pane</Pane>
      </>
    ),
  },
};
