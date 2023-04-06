import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { ImageLoader } from './ImageLoader';

export default {
  title: 'components/molecules/ImageLoader',
  component: ImageLoader,
  argTypes: {},
} as Meta<typeof ImageLoader>;

const Template: StoryFn<typeof ImageLoader> = (args) => (
  <div className='h-40 w-64'>
    <ImageLoader {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {};
