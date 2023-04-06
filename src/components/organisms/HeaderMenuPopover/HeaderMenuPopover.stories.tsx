import { CommandLineIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { HeaderMenuPopover } from './HeaderMenuPopover';

const meta = {
  title: 'components/organisms/HeaderMenuPopover',
  component: HeaderMenuPopover,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HeaderMenuPopover>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof HeaderMenuPopover> = (args) => (
  <div className='w-24'>
    <HeaderMenuPopover {...args} />
  </div>
);

export const WithIcon: Story = {
  render: Template,
  args: {
    label: 'Button',
    icon: CommandLineIcon,
    children: ({ close }) => (
      <button type='button' onClick={close}>
        Link
      </button>
    ),
  },
};

export const WithoutIcon: Story = {
  render: Template,
  args: {
    label: 'Button',
    children: ({ close }) => (
      <button type='button' onClick={close}>
        Link
      </button>
    ),
  },
};
