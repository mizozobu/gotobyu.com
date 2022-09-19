import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { NextImage } from './NextImage';

export default {
  title: 'components/atoms/NextImage',
  component: NextImage,
  argTypes: {},
} as ComponentMeta<typeof NextImage>;

const Template: ComponentStory<typeof NextImage> = (args) => (
  <NextImage {...args} />
);

export const Example = Template.bind({});
Example.args = {
  id: 'next-image-1',
  className: 'w-48 h-48 bg-indigo-500',
  style: {
    boxShadow:
      '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  },
  src: '/byu/byu.png',
  alt: 'BYU logo',
  layout: 'fill',
  objectFit: 'scale-down',
};
