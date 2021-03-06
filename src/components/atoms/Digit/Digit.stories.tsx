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
  children: 1234,
};

export const RoundUp = Template.bind({});
RoundUp.args = {
  children: 999.5,
};

export const RoundDown = Template.bind({});
RoundDown.args = {
  children: 1000.4,
};

export const RoundTo2DecimalPlaces = Template.bind({});
RoundTo2DecimalPlaces.args = {
  children: 1000.1234,
  decimals: 2,
};
