import { Story, Meta } from '@storybook/react';
import React from 'react';
import { PhotoViewer, Props } from './PhotoViewer';

export default {
  title: 'molecules/PhotoViewer',
  component: PhotoViewer,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => (
  <div className='pt-8 pb-4 md:float-left'>
    <PhotoViewer {...args} />
  </div>
);

export const Single = Template.bind({});
Single.args = {
  colorClass: 'bg-indigo-500',
  images: [
    {
      src: '/byu/byu.png',
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
      src: '/byu/byu.png',
      alt: 'BYU',
      layout: 'fill',
      objectFit: 'scale-down',
    },
    {
      src: '/byuh/byuh.png',
      alt: 'BYUH',
      layout: 'fill',
      objectFit: 'scale-down',
    },
    {
      src: '/byui/byui.png',
      alt: 'BYUI',
      layout: 'fill',
      objectFit: 'scale-down',
    },
  ],
};
