import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ErrorPage, Props } from './ErrorPage';

export default {
  title: 'pages/ErrorPage',
  component: ErrorPage,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <ErrorPage {...args} />;

export const Error = Template.bind({});
Error.args = {};

export const Error404 = Template.bind({});
Error404.args = {};
