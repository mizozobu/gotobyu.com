import { Story, Meta } from '@storybook/react';
import React from 'react';
import { SchoolTable, Props } from './SchoolTable';

export default {
  title: 'organisms/SchoolTable',
  component: SchoolTable,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <SchoolTable {...args} />;

export const Example = Template.bind({});
Example.args = {};
