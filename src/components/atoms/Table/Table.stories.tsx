import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { TableCaption } from '@/components/atoms/TableCaption';
import { Table } from './Table';

export default {
  title: 'components/atoms/Table',
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Example = Template.bind({});
Example.args = {
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
};
