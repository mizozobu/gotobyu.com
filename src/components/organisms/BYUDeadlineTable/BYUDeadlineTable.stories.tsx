import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { BYU_APPLICATION_DEADLINE } from '@d';
import { BYUDeadlineTable } from './BYUDeadlineTable';

export default {
  title: 'organisms/BYUDeadlineTable',
  component: BYUDeadlineTable,
  argTypes: {},
} as ComponentMeta<typeof BYUDeadlineTable>;

const Template: ComponentStory<typeof BYUDeadlineTable> = () => (
  <BYUDeadlineTable />
);

export const Example = Template.bind({});
Example.args = { data: BYU_APPLICATION_DEADLINE };
