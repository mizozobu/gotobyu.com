import React from 'react';
import Image from 'next/image';
import { Story, Meta } from '@storybook/react';
import { SplitPane, Props } from './SplitPane';
import { Pane } from './Pane';

export default {
  title: 'Example/SplitPane',
  component: SplitPane,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <SplitPane {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: (
    <>
      <Pane className='relative h-80 bg-indigo-100'>
        <Image
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
