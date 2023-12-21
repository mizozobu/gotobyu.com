import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './Link.stories';

const { Example } = composeStories(stories);

describe('<Link />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });
});
