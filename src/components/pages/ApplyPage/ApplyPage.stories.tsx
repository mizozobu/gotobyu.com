import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ApplyPage, Props } from './ApplyPage';

export default {
  title: 'pages/ApplyPage',
  component: ApplyPage,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <ApplyPage {...args} />;

export const Example = Template.bind({});
Example.args = {};
