import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './BgRotate.stories';

const { Example } = composeStories(stories);

describe('<BgRotate />', () => {
  it('should render props.children', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByText('Content')).toBeVisible();
  });

  it('background element should have props.colorClass in class', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByTestId('BgRotate-bg')).toHaveClass('bg-indigo-500');
  });
});
