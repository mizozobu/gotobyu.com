import { Story, Meta } from '@storybook/react';
import React from 'react';
import { NextImage, Props } from './NextImage';

export default {
  title: 'atoms/NextImage',
  component: NextImage,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <NextImage {...args} />;

export const Example = Template.bind({});
Example.args = {
  className: 'w-48 h-48 bg-indigo-50',
  src: '/byu/byu.png',
  alt: 'BYU logo',
  layout: 'fill',
  objectFit: 'scale-down',
};
