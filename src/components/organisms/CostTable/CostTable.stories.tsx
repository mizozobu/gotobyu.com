import { Story, Meta } from '@storybook/react';
import React from 'react';
import { CostTable, Props } from './CostTable';

export default {
  title: 'organisms/CostTable',
  component: CostTable,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <CostTable {...args} />;

export const Example = Template.bind({});
Example.args = {
  forex: {
    exrate: 110,
    timestamp: new Date().toISOString(),
  },
};
