import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './InternalLink.stories';

const { Example } = composeStories(stories);

describe('<InternalLink />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });
});
