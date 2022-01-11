import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BgRotate, Props } from './BgRotate';

export default {
  title: 'atoms/BgRotate',
  component: BgRotate,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <BgRotate {...args} />;

export const WithoutLayer = Template.bind({});
WithoutLayer.args = {
  className: 'w-48 h-48',
  colorClass: 'bg-indigo-500',
};

export const WithLayer = Template.bind({});
WithLayer.args = {
  className: 'w-48 h-48',
  colorClass: 'bg-indigo-500',
  children: <div className='w-48 h-48 rounded-md bg-indigo-100'>Nice</div>,
};
