import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ErrorPage } from './ErrorPage';

export default {
  title: 'pages/ErrorPage',
  component: ErrorPage,
  argTypes: {},
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => (
  <ErrorPage {...args} />
);

export const Error = Template.bind({});
Error.args = {};

export const Error404 = Template.bind({});
Error404.args = {};
