import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { SearchDialog } from './SearchDialog';

export default {
  title: 'features/search/SearchDialog',
  component: SearchDialog,
  argTypes: {},
} as Meta<typeof SearchDialog>;

const Template: StoryFn<typeof SearchDialog> = (args) => (
  <SearchDialog {...args} />
);

export const Example = Template.bind({});
Example.args = {
  isOpen: true,
};
