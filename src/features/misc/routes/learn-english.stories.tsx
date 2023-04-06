import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { MDX } from '@/features/mdx';
import LeranEnglish from './learn-english.mdx';

const meta = {
  title: 'features/misc/LeranEnglish',
  component: LeranEnglish,
  argTypes: {},
} satisfies Meta<typeof LeranEnglish>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof LeranEnglish> = () => (
  <LeranEnglish components={MDX} />
);

export const Example: Story = {
  render: Template,
  args: {},
};
