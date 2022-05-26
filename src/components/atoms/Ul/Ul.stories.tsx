import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Ul } from './Ul';

export default {
  title: 'atoms/Ul',
  component: Ul,
  argTypes: {},
} as ComponentMeta<typeof Ul>;

const Template: ComponentStory<typeof Ul> = (args) => <Ul {...args} />;

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
