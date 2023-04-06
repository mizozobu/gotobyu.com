import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { Li } from './Li';

export default {
  title: 'components/atoms/Li',
  component: Li,
  argTypes: {},
} as Meta<typeof Li>;

const Template: StoryFn<typeof Li> = (args) => <Li {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'item',
};
