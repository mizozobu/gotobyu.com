import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { Pane } from './Pane';

export default {
  title: 'components/atoms/Pane',
  component: Pane,
  argTypes: {},
} as Meta<typeof Pane>;

const Template: StoryFn<typeof Pane> = (args) => <Pane {...args} />;

export const Example = Template.bind({});
Example.args = {
  className: 'flex items-center bg-indigo-200',
  children: 'Content',
};
