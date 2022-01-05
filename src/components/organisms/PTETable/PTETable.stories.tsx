import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PTETable, Props } from './PTETable';

export default {
  title: 'molecules/PTETable',
  component: PTETable,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <PTETable {...args} />;

export const Example = Template.bind({});
Example.args = {};
