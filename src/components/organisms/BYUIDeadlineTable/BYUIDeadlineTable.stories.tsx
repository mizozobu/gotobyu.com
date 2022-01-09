import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BYUI_APPLICATION_DEADLINE } from '@d';
import { BYUIDeadlineTable, Props } from './BYUIDeadlineTable';

export default {
  title: 'organisms/BYUIDeadlineTable',
  component: BYUIDeadlineTable,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <BYUIDeadlineTable {...args} />;

export const Example = Template.bind({});
Example.args = { data: BYUI_APPLICATION_DEADLINE };
