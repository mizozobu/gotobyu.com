import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { MockInstantSearch } from '@/test/instantsearch';
import { CustomPoweredBy } from './CustomPoweredBy';

const meta = {
  title: 'features/search/CustomPoweredBy',
  component: CustomPoweredBy,
  argTypes: {},
} satisfies Meta<typeof CustomPoweredBy>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof CustomPoweredBy> = () => (
  <MockInstantSearch>
    <CustomPoweredBy />
  </MockInstantSearch>
);

export const Example: Story = {
  render: Template,
  args: {},
};
