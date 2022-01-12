import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { BorderDraw } from './BorderDraw';

export default {
  title: 'atoms/BorderDraw',
  component: BorderDraw,
  argTypes: {},
} as ComponentMeta<typeof BorderDraw>;

const Template: ComponentStory<typeof BorderDraw> = (args) => (
  <BorderDraw {...args} />
);

export const Example = Template.bind({});
Example.args = {
  children: 'Button',
  className: 'w-20 h-20 text-indigo-500',
  borderColor: 'rgba(99, 102, 241, 1)',
};
