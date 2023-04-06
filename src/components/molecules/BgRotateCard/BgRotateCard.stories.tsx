import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BgRotateCard } from './BgRotateCard';

const meta = {
  title: 'components/molecules/BgRotateCard',
  component: BgRotateCard,
  argTypes: {},
} satisfies Meta<typeof BgRotateCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof BgRotateCard> = (args) => (
  <div className='p-16'>
    <BgRotateCard {...args} />
  </div>
);

export const Example: Story = {
  render: Template,
  args: {
    children: <div>content</div>,
    style: {
      '--bg': '#002e5d',
    },
  },
};
