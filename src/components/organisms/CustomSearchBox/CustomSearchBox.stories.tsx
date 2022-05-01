import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { CustomSearchBox } from './CustomSearchBox';

export default {
  title: 'organisms/CustomSearchBox',
  component: CustomSearchBox,
  argTypes: { refine: { action: 'refine' } },
} as ComponentMeta<typeof CustomSearchBox>;

const Template: ComponentStory<typeof CustomSearchBox> = (args) => (
  <CustomSearchBox {...args} />
);

export const Example = Template.bind({});
Example.args = {
  className: 'px-4 py-2 rounded-full bg-indigo-50',
  currentRefinement: 'default value',
  delay: 500,
};
