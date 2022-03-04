import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { SearchDialog } from './SearchDialog';

export default {
  title: 'ecosystems/SearchDialog',
  component: SearchDialog,
  argTypes: {},
} as ComponentMeta<typeof SearchDialog>;

const Template: ComponentStory<typeof SearchDialog> = (args) => (
  <SearchDialog {...args} />
);

export const Example = Template.bind({});
Example.args = {
  isOpen: true,
  onClose: () => {
    alert('close');
  },
};
