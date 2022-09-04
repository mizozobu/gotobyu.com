import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './BgRotateCard.stories';

const { Example } = composeStories(stories);

describe('<BgRotateCard />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByText('content')).toBeVisible();
  });

  it('should pass props.style["--bg"] to <BgRotate />', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByTestId('BgRotate')).toHaveStyle({
      '--bg': '#002e5d',
    });
  });
});
