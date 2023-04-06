import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { SchoolDataTable } from './SchoolDataTable';

const meta = {
  title: 'features/compare/SchoolDataTable',
  component: SchoolDataTable,
  argTypes: {},
} satisfies Meta<typeof SchoolDataTable>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof SchoolDataTable> = () => <SchoolDataTable />;

export const Example: Story = {
  render: Template,
  args: {},
};
