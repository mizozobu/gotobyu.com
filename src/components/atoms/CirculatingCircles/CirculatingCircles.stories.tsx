import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CirculatingCircles, Props } from './CirculatingCircles';

export default {
  title: 'atoms/CirculatingCircles',
  component: CirculatingCircles,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <CirculatingCircles {...args} />;

export const Static = Template.bind({});
Static.args = {};

export const Animated = Template.bind({});
Animated.args = {
  animated: true,
};
