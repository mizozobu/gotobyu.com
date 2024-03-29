import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './NextImage.stories';

const { Example } = composeStories(stories);

describe('<NextImage />', () => {
  it('should render image', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByAltText('alt text')).toBeVisible();
  });

  it('should have props.className in class', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByTestId('NextImage')).toHaveClass(
      'w-64 aspect-[3/2] object-cover',
    );
  });

  it('should have props.id in id', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByTestId('NextImage')).toHaveAttribute(
      'id',
      'next-image-1',
    );
  });

  it('should have props.style in style', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByTestId('NextImage')).toHaveStyle({
      boxShadow:
        '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    });
  });
});
