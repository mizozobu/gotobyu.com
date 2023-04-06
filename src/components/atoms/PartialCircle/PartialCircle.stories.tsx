import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { PartialCircle } from './PartialCircle';

const meta = {
  title: 'components/atoms/PartialCircle',
  component: PartialCircle,
  argTypes: {},
} satisfies Meta<typeof PartialCircle>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof PartialCircle> = (args) => {
  const { r } = args;
  return (
    <svg height='100' width='100' viewBox='0 0 100 100'>
      <g transform={`translate(${r}, ${r})`}>
        <PartialCircle {...args} />
      </g>
    </svg>
  );
};

export const Example: Story = {
  render: Template,
  args: {
    r: 50,
    angle: 240,
  },
};
