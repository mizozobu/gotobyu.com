import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ImageLoader } from './ImageLoader';

export default {
  title: 'components/molecules/ImageLoader',
  component: ImageLoader,
  argTypes: {},
} as ComponentMeta<typeof ImageLoader>;

const Template: ComponentStory<typeof ImageLoader> = (args) => (
  <div className='h-40 w-64'>
    <ImageLoader {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {};
