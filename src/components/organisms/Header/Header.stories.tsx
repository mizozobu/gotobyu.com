import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import { Header } from './Header';

const meta = {
  title: 'components/organisms/Header',
  component: Header,
  argTypes: {},
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Header> = () => <Header />;

export const Example: Story = {
  render: Template,
  args: {},
};
