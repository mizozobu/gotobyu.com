import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { CustomSearchBox } from './CustomSearchBox';

export default {
  title: 'features/search/CustomSearchBox',
  component: CustomSearchBox,
  argTypes: { refine: { action: 'refine' } },
} as Meta<typeof CustomSearchBox>;

const Template: StoryFn<typeof CustomSearchBox> = (args) => (
  <CustomSearchBox {...args} />
);

export const Example = Template.bind({});
Example.args = {
  className: 'px-4 py-2 rounded-full bg-indigo-50',
  currentRefinement: 'default value',
  delay: 500,
};
