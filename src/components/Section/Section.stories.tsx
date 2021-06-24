import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Section, Props } from './Section';

export default {
  title: 'Example/Section',
  component: Section,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Section {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: (
    <>
      <div className='w-60 h-24 bg-indigo-500' />
      <div className='w-60 h-24 bg-indigo-500' />
      <div className='w-60 h-24 bg-indigo-500' />
    </>
  ),
};
