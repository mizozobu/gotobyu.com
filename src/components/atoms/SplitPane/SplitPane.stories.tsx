import React from 'react';
import { Story, Meta } from '@storybook/react';
import { NextImage } from '@c/atoms/NextImage';
import { Pane } from '@c/atoms/Pane';
import { SplitPane, Props } from './SplitPane';

export default {
  title: 'atoms/SplitPane',
  component: SplitPane,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <SplitPane {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: (
    <>
      <Pane className=' bg-indigo-100'>
        <NextImage
          className='h-80'
          src='/byu.png'
          alt='byu logo'
          layout='fill'
          objectFit='scale-down'
        />
      </Pane>
      <Pane className='flex items-center bg-indigo-200'>this is a pane.</Pane>
    </>
  ),
};
