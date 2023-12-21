import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './MdxContainer.stories';

const { Example } = composeStories(stories);

describe('<MdxContainer />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('article')).toBeVisible();
  });
});
