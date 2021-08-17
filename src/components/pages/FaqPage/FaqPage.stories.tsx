import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FaqPage, Props } from './FaqPage';

export default {
  title: 'pages/FaqPage',
  component: FaqPage,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <FaqPage {...args} />;

export const Example = Template.bind({});
Example.args = {
  questions: [
    {
      text: 'what?',
    },
    {
      text: 'when?',
    },
    {
      text: 'where?',
    },
    {
      text: 'who?',
    },
    {
      text: 'why?',
    },
    {
      text: 'how?',
    },
  ],
};
