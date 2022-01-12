import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { BYUI_APPLICATION_DEADLINE } from '@d';
import { BYUIDeadlineTable } from './BYUIDeadlineTable';

export default {
  title: 'organisms/BYUIDeadlineTable',
  component: BYUIDeadlineTable,
  argTypes: {},
} as ComponentMeta<typeof BYUIDeadlineTable>;

const Template: ComponentStory<typeof BYUIDeadlineTable> = () => (
  <BYUIDeadlineTable />
);

export const Example = Template.bind({});
Example.args = { data: BYUI_APPLICATION_DEADLINE };
