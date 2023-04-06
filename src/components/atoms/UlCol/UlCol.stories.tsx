import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { UlCol } from './UlCol';

export default {
  title: 'components/atoms/UlCol',
  component: UlCol,
  argTypes: {},
} as Meta<typeof UlCol>;

const Template: StoryFn<typeof UlCol> = (args) => <UlCol {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: (
    <>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>
    </>
  ),
};
