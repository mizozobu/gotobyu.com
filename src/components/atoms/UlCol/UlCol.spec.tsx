import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './UlCol.stories';

const { Example } = composeStories(stories);

describe('<UlCol />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByTestId('UlCol')).toBeVisible();
  });
});
