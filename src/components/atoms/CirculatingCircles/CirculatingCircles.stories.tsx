import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { CirculatingCircles } from './CirculatingCircles';

export default {
  title: 'atoms/CirculatingCircles',
  component: CirculatingCircles,
  argTypes: {},
} as ComponentMeta<typeof CirculatingCircles>;

const Template: ComponentStory<typeof CirculatingCircles> = (args) => (
  <CirculatingCircles {...args} />
);

export const Static = Template.bind({});
Static.args = {};

export const Animated = Template.bind({});
Animated.args = {
  animated: true,
};
