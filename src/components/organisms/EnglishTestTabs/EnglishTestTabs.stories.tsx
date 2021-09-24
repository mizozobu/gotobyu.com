import React from 'react';
import { Story, Meta } from '@storybook/react';
import { EnglishTestTabs, Props } from './EnglishTestTabs';

export default {
  title: 'organisms/EnglishTestTabs',
  component: EnglishTestTabs,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <EnglishTestTabs {...args} />;

export const Example = Template.bind({});
Example.args = {};
