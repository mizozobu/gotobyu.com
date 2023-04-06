import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { FacebookIcon } from './FacebookIcon';

export default {
  title: 'components/atoms/FacebookIcon',
  component: FacebookIcon,
  argTypes: {},
} as Meta<typeof FacebookIcon>;

const Template: StoryFn<typeof FacebookIcon> = (args) => (
  <FacebookIcon {...args} />
);

export const Example = Template.bind({});
Example.args = {};
