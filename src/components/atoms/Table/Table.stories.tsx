import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TableCaption } from '@cmp/atoms/TableCaption';
import { Table, Props } from './Table';

export default {
  title: 'atoms/Table',
  component: Table,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Table {...args} />;

export const Example = Template.bind({});
Example.args = {
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
