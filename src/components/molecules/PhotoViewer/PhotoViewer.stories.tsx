import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import skiResortImage from '@/features/byu/assets/ski-resort.jpg';
import { PhotoViewer } from './PhotoViewer.client';

const meta = {
  title: 'components/molecules/PhotoViewer',
  component: PhotoViewer,
  argTypes: {},
} satisfies Meta<typeof PhotoViewer>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof PhotoViewer> = (args) => (
  <div className='w-64'>
    <PhotoViewer {...args} />
  </div>
);

export const Single: Story = {
  render: Template,
  args: {
    style: {
      '--bg': '#002e5d',
    },
    images: [
      {
        src: skiResortImage,
        alt: 'alt text',
        width: 0, // set any number to avoid error
        height: 0, // set any number to avoid error
      },
    ],
  },
};

export const Multi: Story = {
  render: Template,
  args: {
    style: {
      '--bg': '#002e5d',
    },
    images: [
      {
        src: skiResortImage,
        alt: 'alt text',
        citation: 'http://localhost:3000',
        width: 0, // set any number to avoid error
        height: 0, // set any number to avoid error
      },
      {
        src: skiResortImage,
        alt: 'alt text',
        citation: 'http://localhost:3000',
        width: 0, // set any number to avoid error
        height: 0, // set any number to avoid error
      },
      {
        src: skiResortImage,
        alt: 'alt text',
        citation: 'http://localhost:3000',
        width: 0, // set any number to avoid error
        height: 0, // set any number to avoid error
      },
    ],
  },
};
