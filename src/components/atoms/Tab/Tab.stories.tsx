import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from './Tab.client';

const meta = {
  title: 'components/atoms/Tab',
  component: Tab,
  argTypes: {},
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Tab> = (args) => <TabGroup {...args} />;

export const Example: Story = {
  render: Template,
  args: {
    children: (
      <>
        <TabList className='flex'>
          <Tab>Tab</Tab>
          <Tab>
            This is a really long text. This is a really long text. This is a
            really long text.
          </Tab>
          <Tab>
            <div>
              This is a really long text wrapped in a div. This is a really long
              text wrapped in a div.
            </div>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Tab Content 1</TabPanel>
          <TabPanel>Tab Content 2</TabPanel>
          <TabPanel>Tab Content 3</TabPanel>
        </TabPanels>
      </>
    ),
  },
};
