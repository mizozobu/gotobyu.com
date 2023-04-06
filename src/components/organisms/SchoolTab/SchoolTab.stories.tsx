import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { SchoolTab } from './SchoolTab';

export default {
  title: 'components/organisms/SchoolTab',
  component: SchoolTab,
  argTypes: {},
} as Meta<typeof SchoolTab>;

const Template: StoryFn<typeof SchoolTab> = () => (
  <SchoolTab>
    <SchoolTab.Panel key='byu' paneFor='byu'>
      BYU
    </SchoolTab.Panel>
    <SchoolTab.Panel key='byuh' paneFor='byuh'>
      BYUH
    </SchoolTab.Panel>
    <SchoolTab.Panel key='byui' paneFor='byui'>
      BYUI
    </SchoolTab.Panel>
  </SchoolTab>
);

export const Example = Template.bind({});
Example.args = {};
