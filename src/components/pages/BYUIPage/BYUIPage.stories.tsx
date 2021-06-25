import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BYUIPage, Props } from './BYUIPage';

export default {
  title: 'pages/BYUIPage',
  component: BYUIPage,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <BYUIPage {...args} />;

export const Example = Template.bind({});
Example.args = {};
