import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BYUHPage, Props } from './BYUHPage';

export default {
  title: 'pages/BYUHPage',
  component: BYUHPage,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <BYUHPage {...args} />;

export const Example = Template.bind({});
Example.args = {};
