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

  it('should assign props.backgroundColor to css variable --background-color', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('button')).toHaveStyle({
      '--background-color': 'rgb(49 46 129)',
    });
  });

  it('should assign props.rippleColor to css variable --ripple-color', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('button')).toHaveStyle({
      '--ripple-color': 'rgb(165 180 252)',
    });
  });
});
