import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Li } from './Li';

export default {
  title: 'atoms/Li',
  component: Li,
  argTypes: {},
} as ComponentMeta<typeof Li>;

const Template: ComponentStory<typeof Li> = (args) => <Li {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'item',
};
