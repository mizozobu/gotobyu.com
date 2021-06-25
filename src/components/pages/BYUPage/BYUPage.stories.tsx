import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BYUPage, Props } from './BYUPage';

export default {
  title: 'pages/BYUPage',
  component: BYUPage,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <BYUPage {...args} />;

export const Example = Template.bind({});
Example.args = {};
