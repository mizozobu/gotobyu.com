import React from 'react';
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
      <Pane className='bg-indigo-100'>
        <img src='/byu.png' alt='byu logo' />
      </Pane>
      <Pane className='flex items-center bg-indigo-200'>this is a pane.</Pane>
    </>
  ),
};
