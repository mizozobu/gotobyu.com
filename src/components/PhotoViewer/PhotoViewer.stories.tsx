import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PhotoViewer, Props } from './PhotoViewer';

export default {
  title: 'Example/PhotoViewer',
  component: PhotoViewer,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <PhotoViewer {...args} />;

export const Single = Template.bind({});
Single.args = {
  colorClass: 'bg-indigo-500',
  images: [
    {
      src: '/byu.png',
      alt: 'BYU',
      layout: 'fill',
      objectFit: 'scale-down',
    },
  ],
};

export const Multi = Template.bind({});
Multi.args = {
  colorClass: 'bg-indigo-500',
  images: [
    {
      src: '/byu.png',
      alt: 'BYU',
      layout: 'fill',
      objectFit: 'scale-down',
    },
    {
      src: '/byuh.png',
      alt: 'BYUH',
      layout: 'fill',
      objectFit: 'scale-down',
    },
    {
      src: '/byui.png',
      alt: 'BYUI',
      layout: 'fill',
      objectFit: 'scale-down',
    },
  ],
};
