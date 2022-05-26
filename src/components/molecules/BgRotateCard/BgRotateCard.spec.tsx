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

  it('background element should have props.colorClass in class', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByTestId('BgRotate-bg')).toHaveClass('bg-indigo-500');
  });
});
