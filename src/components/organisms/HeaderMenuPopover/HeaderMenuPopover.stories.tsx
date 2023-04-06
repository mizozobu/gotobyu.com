import { CommandLineIcon } from '@heroicons/react/24/outline';
import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { HeaderMenuPopover } from './HeaderMenuPopover';

export default {
  title: 'components/organisms/HeaderMenuPopover',
  component: HeaderMenuPopover,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof HeaderMenuPopover>;

const Template: StoryFn<typeof HeaderMenuPopover> = (args) => (
  <div className='w-24'>
    <HeaderMenuPopover {...args} />
  </div>
);

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Button',
  icon: CommandLineIcon,
  children: ({ close }) => (
    <button type='button' onClick={close}>
      Link
    </button>
  ),
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  label: 'Button',
  children: ({ close }) => (
    <button type='button' onClick={close}>
      Link
    </button>
  ),
};
