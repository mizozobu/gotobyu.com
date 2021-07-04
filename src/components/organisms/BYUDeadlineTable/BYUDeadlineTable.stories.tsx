import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BYUDeadlineTable, Props } from './BYUDeadlineTable';

export default {
  title: 'organisms/BYUDeadlineTable',
  component: BYUDeadlineTable,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <BYUDeadlineTable {...args} />;

export const Example = Template.bind({});
Example.args = {};
