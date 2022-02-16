import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ImageLoader } from './ImageLoader';

export default {
  title: 'molecules/ImageLoader',
  component: ImageLoader,
  argTypes: {},
} as ComponentMeta<typeof ImageLoader>;

const Template: ComponentStory<typeof ImageLoader> = (args) => (
  <ImageLoader {...args} className='h-32 w-64' />
);

export const Example = Template.bind({});
Example.args = {};
