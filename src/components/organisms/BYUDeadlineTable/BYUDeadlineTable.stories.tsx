import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BYU_APPLICATION_DEADLINE } from '@d';
import { BYUDeadlineTable, Props } from './BYUDeadlineTable';

export default {
  title: 'organisms/BYUDeadlineTable',
  component: BYUDeadlineTable,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <BYUDeadlineTable {...args} />;

export const Example = Template.bind({});
Example.args = { data: BYU_APPLICATION_DEADLINE };
