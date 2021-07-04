import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TabPane } from '@c/atoms/TabPane';
import { TabNav } from '@c/atoms/TabNav';
import { TabNavBar } from '@c/atoms/TabNavBar';
import { TabContent } from '@c/atoms/TabContent';
import { Tab, Props } from './Tab';

export default {
  title: 'molecules/Tab',
  component: Tab,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => (
  <Tab {...args}>
    <TabNavBar>
      <TabNav id='1'>tab1</TabNav>
      <TabNav id='2'>tab2</TabNav>
      <TabNav id='3'>tab3</TabNav>
    </TabNavBar>
    <TabContent>
      <TabPane id='1' className=''>
        tab1 content
      </TabPane>
      <TabPane id='2' className=''>
        tab2 content
      </TabPane>
      <TabPane id='3' className=''>
        tab3 content
      </TabPane>
    </TabContent>
  </Tab>
);

export const Example = Template.bind({});
Example.args = {};
