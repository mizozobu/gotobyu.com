import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './Pane.stories';

const { Example } = composeStories(stories);

describe('<Pane />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByText('Content')).toBeVisible();
  });
});
