import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { CostTable } from './CostTable';

export default {
  title: 'features/compare/CostTable',
  component: CostTable,
  argTypes: {},
} as Meta<typeof CostTable>;

const Template: StoryFn<typeof CostTable> = () => <CostTable />;

export const Example = Template.bind({});
Example.args = {
  exrate: 110,
  isJPY: true,
  isLDS: true,
};
