import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { CirculatingCircles } from './CirculatingCircles';

const meta = {
  title: 'components/atoms/CirculatingCircles',
  component: CirculatingCircles,
  argTypes: {},
} satisfies Meta<typeof CirculatingCircles>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof CirculatingCircles> = (args) => (
  <div className='w-48'>
    <CirculatingCircles {...args} />
  </div>
);

export const Static: Story = {
  render: Template,
  args: {},
};

export const Animated: Story = {
  render: Template,
  args: {
    animated: true,
  },
};
