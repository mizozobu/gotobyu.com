import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { NextImage } from '@cmp/atoms/NextImage';
import { Pane } from '@cmp/atoms/Pane';
import { SplitPane } from './SplitPane';

export default {
  title: 'atoms/SplitPane',
  component: SplitPane,
  argTypes: {},
} as ComponentMeta<typeof SplitPane>;

const Template: ComponentStory<typeof SplitPane> = (args) => (
  <SplitPane {...args} />
);

export const Example = Template.bind({});
Example.args = {
  children: (
    <>
      <Pane className=' bg-indigo-100'>
        <NextImage
          className='h-80'
          src='/byu/byu.png'
          alt='byu logo'
          layout='fill'
          objectFit='scale-down'
        />
      </Pane>
      <Pane className='flex items-center bg-indigo-200'>this is a pane.</Pane>
    </>
  ),
};
