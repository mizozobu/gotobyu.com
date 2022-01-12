import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { BYUH_APPLICATION_DEADLINE } from '@d';
import { BYUHDeadlineTable } from './BYUHDeadlineTable';

export default {
  title: 'organisms/BYUHDeadlineTable',
  component: BYUHDeadlineTable,
  argTypes: {},
} as ComponentMeta<typeof BYUHDeadlineTable>;

const Template: ComponentStory<typeof BYUHDeadlineTable> = () => (
  <BYUHDeadlineTable />
);

export const Example = Template.bind({});
Example.args = { data: BYUH_APPLICATION_DEADLINE };
