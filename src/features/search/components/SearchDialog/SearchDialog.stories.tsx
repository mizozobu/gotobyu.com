import type { Meta, StoryObj } from '@storybook/react';
import { SearchDialog } from './SearchDialog';

const meta = {
  title: 'features/search/SearchDialog',
  component: SearchDialog,
  argTypes: {},
} satisfies Meta<typeof SearchDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    isOpen: true,
  },
};
