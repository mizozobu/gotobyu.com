import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Tab } from './Tab';

export default {
  title: 'components/atoms/Tab',
  component: Tab,
  argTypes: {},
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = () => (
  <Tab.Group>
    <Tab.List className='flex'>
      <Tab>Tab</Tab>
      <Tab>
        This is a really long text. This is a really long text. This is a really
        long text.
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
  </Tab.Group>
);

export const Example = Template.bind({});
Example.args = {};
