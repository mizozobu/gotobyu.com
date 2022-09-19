import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { PhotoViewer } from './PhotoViewer';

export default {
  title: 'components/molecules/PhotoViewer',
  component: PhotoViewer,
  argTypes: {},
} as ComponentMeta<typeof PhotoViewer>;

const Template: ComponentStory<typeof PhotoViewer> = (args) => (
  <div className='pt-8 pb-4 md:float-left'>
    <PhotoViewer {...args} />
  </div>
);

export const Single = Template.bind({});
Single.args = {
  style: {
    '--bg': '#002e5d',
  },
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
  style: {
    '--bg': '#002e5d',
  },
  images: [
    {
      src: '/byu/byu.png',
      alt: 'BYU',
      layout: 'fill',
      objectFit: 'scale-down',
      citation: 'http://localhost:3000/schools/byu',
    },
    {
      src: '/byuh/byuh.png',
      alt: 'BYUH',
      layout: 'fill',
      objectFit: 'scale-down',
      citation: 'http://localhost:3000/schools/byuh',
    },
    {
      src: '/byui/byui.png',
      alt: 'BYUI',
      layout: 'fill',
      objectFit: 'scale-down',
      citation: 'http://localhost:3000/schools/byui',
    },
  ],
};
