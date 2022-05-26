import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Pane } from './Pane';

export default {
  title: 'atoms/Pane',
  component: Pane,
  argTypes: {},
} as ComponentMeta<typeof Pane>;

const Template: ComponentStory<typeof Pane> = (args) => <Pane {...args} />;

export const Example = Template.bind({});
Example.args = {
  className: 'flex items-center bg-indigo-200',
  children: 'Content',
};
