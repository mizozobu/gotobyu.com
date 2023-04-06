import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Footer } from './Footer';

const meta = {
  title: 'components/organisms/Footer',
  component: Footer,
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Footer> = () => <Footer />;

export const Example: Story = {
  render: Template,
  args: {},
};
