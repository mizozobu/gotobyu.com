import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { ImageLoader } from './ImageLoader';

const meta = {
  title: 'components/molecules/ImageLoader',
  component: ImageLoader,
  argTypes: {},
} satisfies Meta<typeof ImageLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof ImageLoader> = (args) => (
  <div className='h-40 w-64'>
    <ImageLoader {...args} />
  </div>
);

export const Example: Story = {
  render: Template,
  args: {},
};
