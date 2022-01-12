import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { NextImage } from './NextImage';

export default {
  title: 'atoms/NextImage',
  component: NextImage,
  argTypes: {},
} as ComponentMeta<typeof NextImage>;

const Template: ComponentStory<typeof NextImage> = (args) => (
  <NextImage {...args} />
);

export const Example = Template.bind({});
Example.args = {
  className: 'w-48 h-48 bg-indigo-50',
  src: '/byu/byu.png',
  alt: 'BYU logo',
  layout: 'fill',
  objectFit: 'scale-down',
};
