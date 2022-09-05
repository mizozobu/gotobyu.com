import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './RippleButton.stories';

const { Example } = composeStories(stories);

describe('<RippleButton />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible();
  });

  it('should pass props.style', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('button')).toHaveStyle({
      '--bg-color': 'rgb(49 46 129)',
      '--ripple-color': 'rgb(165 180 252)',
    });
  });
});
