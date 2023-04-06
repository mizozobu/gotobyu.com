import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import skiResortImage from '@/features/byu/assets/ski-resort.jpg';
import { NextImage } from './NextImage';

export default {
  title: 'components/atoms/NextImage',
  component: NextImage,
  argTypes: {},
} as Meta<typeof NextImage>;

const Template: StoryFn<typeof NextImage> = (args) => (
  <div className='w-64'>
    <NextImage {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  id: 'next-image-1',
  className: 'w-64 aspect-[3/2] object-cover',
  style: {
    boxShadow:
      '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  },
  src: skiResortImage,
  alt: 'alt text',
  width: 0, // set any number to avoid error
  height: 0, // set any number to avoid error
};
