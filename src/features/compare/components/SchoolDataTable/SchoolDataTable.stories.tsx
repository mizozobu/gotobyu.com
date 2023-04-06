import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { SchoolDataTable } from './SchoolDataTable';

export default {
  title: 'features/compare/SchoolDataTable',
  component: SchoolDataTable,
  argTypes: {},
} as Meta<typeof SchoolDataTable>;

const Template: StoryFn<typeof SchoolDataTable> = () => <SchoolDataTable />;

export const Example = Template.bind({});
Example.args = {};
