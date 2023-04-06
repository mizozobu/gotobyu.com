import { ScaleIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';
import { PageCard } from './PageCard';

const meta = {
  title: 'components/molecules/PageCard',
  component: PageCard,
  argTypes: {},
} satisfies Meta<typeof PageCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    icon: ScaleIcon,
    name: 'What is Lorem Ipsum?',
    detail:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
};
