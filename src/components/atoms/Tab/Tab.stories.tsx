import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Tab } from './Tab';

const meta = {
  title: 'components/atoms/Tab',
  component: Tab,
  argTypes: {},
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Tab> = (args) => <Tab.Group {...args} />;

export const Example: Story = {
  render: Template,
  args: {
    children: (
      <>
        <Tab.List className='flex'>
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
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Tab Content 1</Tab.Panel>
          <Tab.Panel>Tab Content 2</Tab.Panel>
          <Tab.Panel>Tab Content 3</Tab.Panel>
        </Tab.Panels>
      </>
    ),
  },
};
