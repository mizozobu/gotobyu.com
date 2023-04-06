import type { Meta, StoryObj } from '@storybook/react';
import { CustomSearchBox } from './CustomSearchBox';

const meta = {
  title: 'features/search/CustomSearchBox',
  component: CustomSearchBox,
  argTypes: { refine: { action: 'refine' } },
} satisfies Meta<typeof CustomSearchBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    className: 'px-4 py-2 rounded-full bg-indigo-50',
    currentRefinement: 'default value',
    delay: 500,
    isSearchStalled: true,
  },
};
