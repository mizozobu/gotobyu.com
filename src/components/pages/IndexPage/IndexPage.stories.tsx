import React from 'react';
import { Story, Meta } from '@storybook/react';
import { IndexPage, Props } from './IndexPage';

export default {
  title: 'pages/IndexPage',
  component: IndexPage,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <IndexPage {...args} />;

export const Example = Template.bind({});
Example.args = {};
