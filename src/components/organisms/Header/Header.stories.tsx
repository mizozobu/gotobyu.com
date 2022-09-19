import type { ComponentStory, ComponentMeta } from '@storybook/react';
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
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Example = Template.bind({});
Example.args = {};
