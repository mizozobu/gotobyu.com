import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { EnglishRequirementTable } from './EnglishRequirementTable';

export default {
  title: 'organisms/EnglishRequirementTable',
  component: EnglishRequirementTable,
  argTypes: {},
} as ComponentMeta<typeof EnglishRequirementTable>;

const Template: ComponentStory<typeof EnglishRequirementTable> = (args) => (
  <EnglishRequirementTable {...args} />
);

export const Example = Template.bind({});
Example.args = {
  exam: 'TOEFL',
  data: {
    byu: {
      reading: 20,
      writing: 20,
      speaking: 20,
      listening: 20,
      total: 80,
    },
    byuh: {
      reading: undefined,
      writing: 17,
      speaking: 17,
      listening: undefined,
      total: 61,
    },
    byui: {
      reading: 17,
      writing: 17,
      speaking: 16,
      listening: 16,
      total: 66,
    },
  },
};
