import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InternshipPage, Props } from './InternshipPage';

export default {
  title: 'pages/InternshipPage',
  component: InternshipPage,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <InternshipPage {...args} />;

export const Example = Template.bind({});
Example.args = {};
