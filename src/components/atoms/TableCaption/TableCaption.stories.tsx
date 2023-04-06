import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { TableCaption } from './TableCaption';

const meta = {
  title: 'components/atoms/TableCaption',
  component: TableCaption,
  argTypes: {},
} satisfies Meta<typeof TableCaption>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof TableCaption> = (args) => (
  <table>
    <TableCaption {...args} />
  </table>
);

export const WithoutDescription: Story = {
  render: Template,
  args: {
    children: 'table',
  },
};

export const WithDescription: Story = {
  render: Template,
  args: {
    description: 'table description',
    children: 'table',
  },
};
