import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ComparePage, Props } from './ComparePage';

export default {
  title: 'pages/ComparePage',
  component: ComparePage,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <ComparePage {...args} />;

export const Example = Template.bind({});
Example.args = {};
