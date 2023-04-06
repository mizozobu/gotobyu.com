import type { Meta, StoryObj } from '@storybook/react';
import { TableCaption } from '@/components/atoms/TableCaption';
import { Table } from './Table';

const meta = {
  title: 'components/atoms/Table',
  component: Table,
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    className: 'shadow-md p-4',
    style: {
      '--thick-border-color': 'indigo',
    },
    children: (
      <>
        <TableCaption>Table Example</TableCaption>
        <thead>
          <tr>
            <th scope='col'>Month</th>
            <th scope='col'>Savings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>January</th>
            <td>$100</td>
          </tr>
          <tr>
            <th scope='row'>February</th>
            <td>$80</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope='row'>Sum</th>
            <td>$180</td>
          </tr>
        </tfoot>
      </>
    ),
  },
};
