import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './ImageLoader.stories';

const { Example } = composeStories(stories);

describe('<ImageLoader />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('progressbar')).toBeVisible();
  });
});
