import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { SchoolTh } from './SchoolTh';

const meta = {
  title: 'components/molecules/SchoolTh',
  component: SchoolTh.BYU,
  argTypes: {},
} satisfies Meta<() => JSX.Element>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<() => JSX.Element> = () => (
  <table>
    <thead>
      <tr>
        <th scope='col'>{}</th>
        <SchoolTh.BYU />
        <SchoolTh.BYUH />
        <SchoolTh.BYUI />
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>Row 1</th>
        <td>1/1</td>
        <td>1/2</td>
        <td>1/3</td>
      </tr>
      <tr>
        <th scope='row'>Row 2</th>
        <td>2/1</td>
        <td>2/2</td>
        <td>2/3</td>
      </tr>
      <tr>
        <th scope='row'>Row 3</th>
        <td>3/1</td>
        <td>3/2</td>
        <td>3/3</td>
      </tr>
    </tbody>
  </table>
);

export const Example: Story = {
  render: Template,
  args: {},
};
