import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { SchoolTab } from './SchoolTab';

const meta = {
  title: 'components/organisms/SchoolTab',
  component: SchoolTab,
  argTypes: {},
} satisfies Meta<typeof SchoolTab>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof SchoolTab> = (args) => <SchoolTab {...args} />;

export const Example: Story = {
  render: Template,
  args: {
    children: [
      <SchoolTab.Panel key='byu' paneFor='byu'>
        BYU
      </SchoolTab.Panel>,
      <SchoolTab.Panel key='byuh' paneFor='byuh'>
        BYUH
      </SchoolTab.Panel>,
      <SchoolTab.Panel key='byui' paneFor='byui'>
        BYUI
      </SchoolTab.Panel>,
    ],
  },
};
