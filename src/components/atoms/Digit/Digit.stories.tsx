import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Digit } from './Digit';

export default {
  title: 'atoms/Digit',
  component: Digit,
  argTypes: {},
} as ComponentMeta<typeof Digit>;

const Template: ComponentStory<typeof Digit> = (args) => <Digit {...args} />;

export const NoComma = Template.bind({});
NoComma.args = {
  children: 123,
};

export const Comma = Template.bind({});
Comma.args = {
  children: 123456789,
};
