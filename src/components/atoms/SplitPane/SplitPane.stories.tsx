import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { Pane } from '@/components/atoms/Pane';
import { SplitPane } from './SplitPane';

export default {
  title: 'components/atoms/SplitPane',
  component: SplitPane,
  argTypes: {},
} as Meta<typeof SplitPane>;

const Template: StoryFn<typeof SplitPane> = (args) => <SplitPane {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: (
    <>
      <Pane className='bg-indigo-100 py-24'>Left Pane</Pane>
      <Pane className='flex items-center bg-indigo-200'>Right Pane</Pane>
    </>
  ),
};
