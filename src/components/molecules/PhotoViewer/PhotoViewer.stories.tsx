import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import skiResortImage from '@/features/byu/assets/ski-resort.jpg';
import { PhotoViewer } from './PhotoViewer';

export default {
  title: 'components/molecules/PhotoViewer',
  component: PhotoViewer,
  argTypes: {},
} as ComponentMeta<typeof PhotoViewer>;

const Template: ComponentStory<typeof PhotoViewer> = (args) => (
  <div className='w-64'>
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
      src: skiResortImage,
      alt: 'alt text',
      width: 0, // set any number to avoid error
      height: 0, // set any number to avoid error
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
      src: skiResortImage,
      alt: 'alt text',
      citation: 'http://localhost:3000',
      width: 0, // set any number to avoid error
      height: 0, // set any number to avoid error
    },
    {
      src: skiResortImage,
      alt: 'alt text',
      citation: 'http://localhost:3000',
      width: 0, // set any number to avoid error
      height: 0, // set any number to avoid error
    },
    {
      src: skiResortImage,
      alt: 'alt text',
      citation: 'http://localhost:3000',
      width: 0, // set any number to avoid error
      height: 0, // set any number to avoid error
    },
  ],
};
