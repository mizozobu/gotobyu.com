import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { FacebookIcon } from './FacebookIcon';

export default {
  title: 'atoms/FacebookIcon',
  component: FacebookIcon,
  argTypes: {},
} as ComponentMeta<typeof FacebookIcon>;

const Template: ComponentStory<typeof FacebookIcon> = (args) => (
  <FacebookIcon {...args} />
);

export const Example = Template.bind({});
Example.args = {};
