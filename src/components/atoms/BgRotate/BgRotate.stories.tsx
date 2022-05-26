import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { BgRotate } from './BgRotate';

export default {
  title: 'atoms/BgRotate',
  component: BgRotate,
  argTypes: {},
} as ComponentMeta<typeof BgRotate>;

const Template: ComponentStory<typeof BgRotate> = (args) => (
  <BgRotate {...args} />
);

export const Example = Template.bind({});
Example.args = {
  className: 'w-48 h-48',
  colorClass: 'bg-indigo-500',
  children: <div className='h-48 w-48 rounded-md bg-white'>Content</div>,
};
