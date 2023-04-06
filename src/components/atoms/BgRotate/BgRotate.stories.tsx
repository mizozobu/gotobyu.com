import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { BgRotate } from './BgRotate';

export default {
  title: 'components/atoms/BgRotate',
  component: BgRotate,
  argTypes: {},
} as Meta<typeof BgRotate>;

const Template: StoryFn<typeof BgRotate> = (args) => <BgRotate {...args} />;

export const Example = Template.bind({});
Example.args = {
  className: 'w-48 h-48',
  children: <div className='h-48 w-48 rounded-md bg-white'>Content</div>,
  style: {
    '--bg': '#002e5d',
  },
};
