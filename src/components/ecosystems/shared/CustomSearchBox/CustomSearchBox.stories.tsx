import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { CustomSearchBox } from './CustomSearchBox';

export default {
  title: 'ecosystems/CustomSearchBox',
  component: CustomSearchBox,
  argTypes: {},
} as ComponentMeta<typeof CustomSearchBox>;

const Template: ComponentStory<typeof CustomSearchBox> = (args) => (
  <CustomSearchBox {...args} />
);

export const Example = Template.bind({});
Example.args = {
  className: 'px-4 py-2 rounded-full bg-indigo-50',
  currentRefinement: 'default value',
  refine: (v) => alert(v),
  delay: 500,
};
