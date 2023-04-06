import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Header } from './Header';

export default {
  title: 'components/organisms/Header',
  component: Header,
  argTypes: {},
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = () => <Header />;

export const Example = Template.bind({});
Example.args = {};
