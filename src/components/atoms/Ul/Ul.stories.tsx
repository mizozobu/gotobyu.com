import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { Ul } from './Ul';

export default {
  title: 'components/atoms/Ul',
  component: Ul,
  argTypes: {},
} as Meta<typeof Ul>;

const Template: StoryFn<typeof Ul> = (args) => <Ul {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: (
    <>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
    </>
  ),
};
