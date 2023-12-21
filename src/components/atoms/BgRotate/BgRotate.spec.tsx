import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './BgRotate.stories';

const { Example } = composeStories(stories);

describe('<BgRotate />', () => {
  it('should render props.children', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByText('Content')).toBeVisible();
  });

  it('should pass props.style', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByTestId('BgRotate')).toHaveStyle({
      '--bg': '#002e5d',
    });
  });
});
