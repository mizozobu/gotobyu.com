import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { MockInstantSearch } from '@/test/instantsearch';
import { CustomStateResults } from './CustomStateResults';

const meta = {
  title: 'features/search/CustomStateResults',
  component: CustomStateResults,
  argTypes: {},
} satisfies Meta<typeof CustomStateResults>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof CustomStateResults> = (args) => (
  <MockInstantSearch>
    <CustomStateResults {...args} />
  </MockInstantSearch>
);

export const Example: Story = {
  render: Template,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
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
  },
};
