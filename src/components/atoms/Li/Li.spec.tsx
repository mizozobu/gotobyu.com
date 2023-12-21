import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './Li.stories';

const { Example } = composeStories(stories);

describe('<Li />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByText('item')).toBeVisible();
  });
});
