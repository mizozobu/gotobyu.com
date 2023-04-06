import type { Meta, StoryObj } from '@storybook/react';
import { CustomStats } from './CustomStats';

const meta = {
  title: 'features/search/CustomStats',
  component: CustomStats,
  argTypes: {},
} satisfies Meta<typeof CustomStats>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    nbHits: 0,
    nbSortedHits: 0,
    processingTimeMS: 0,
    areHitsSorted: true,
  },
};
