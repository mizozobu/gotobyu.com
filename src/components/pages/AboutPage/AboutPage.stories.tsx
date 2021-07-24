import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AboutPage, Props } from './AboutPage';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <AboutPage {...args} />;

export const Example = Template.bind({});
Example.args = {};
