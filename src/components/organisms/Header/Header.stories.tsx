import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Header } from './Header.client';

const meta = {
  title: 'components/organisms/Header',
  component: Header,
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Header> = () => <Header />;

export const Example: Story = {
  render: Template,
  args: {},
};
