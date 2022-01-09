import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BYUH_APPLICATION_DEADLINE } from '@d';
import { BYUHDeadlineTable, Props } from './BYUHDeadlineTable';

export default {
  title: 'organisms/BYUHDeadlineTable',
  component: BYUHDeadlineTable,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <BYUHDeadlineTable {...args} />;

export const Example = Template.bind({});
Example.args = { data: BYUH_APPLICATION_DEADLINE };
