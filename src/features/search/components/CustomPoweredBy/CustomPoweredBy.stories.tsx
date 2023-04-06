import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { MockInstantSearch } from '@/test/instantsearch';
import { CustomPoweredBy } from './CustomPoweredBy';

export default {
  title: 'features/search/CustomPoweredBy',
  component: CustomPoweredBy,
  argTypes: {},
} as Meta<typeof CustomPoweredBy>;

const Template: StoryFn<typeof CustomPoweredBy> = () => (
  <MockInstantSearch>
    <CustomPoweredBy />
  </MockInstantSearch>
);

export const Example = Template.bind({});
Example.args = {};
