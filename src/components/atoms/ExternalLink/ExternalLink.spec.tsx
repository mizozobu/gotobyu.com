import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './ExternalLink.stories';

const { Example } = composeStories(stories);

describe('<ExternalLink />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });
});
