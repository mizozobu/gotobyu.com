import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LearnEnglishPage, Props } from './LearnEnglishPage';

export default {
  title: 'pages/LearnEnglishPage',
  component: LearnEnglishPage,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <LearnEnglishPage {...args} />;

export const Example = Template.bind({});
Example.args = {};
