import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MockInstantSearch } from '@l/algolia/algolia.fixture';
import { CustomStateResults } from './CustomStateResults';

export default {
  title: 'organisms/CustomStateResults',
  component: CustomStateResults,
  argTypes: {},
} as ComponentMeta<typeof CustomStateResults>;

const Template: ComponentStory<typeof CustomStateResults> = (args) => (
  <MockInstantSearch>
    <CustomStateResults {...args} />
  </MockInstantSearch>
);

export const Example = Template.bind({});
Example.args = {
  searchState: undefined,
  searchResults: undefined,
  allSearchResults: undefined,
  error: {
    stack: '',
    name: '',
    message: '',
    debugData: [],
    statusCode: 403,
    status: 403,
  },
  searching: false,
  searchingForFacetValues: false,
  isSearchStalled: false,
};
