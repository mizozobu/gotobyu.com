import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './SplitPane.stories';

const { Example } = composeStories(stories);

describe('<SplitPane />', () => {
  it('should be rendered', () => {
    expect.assertions(2);

    render(<Example />);

    expect(screen.getByText('Left Pane')).toBeVisible();
    expect(screen.getByText('Right Pane')).toBeVisible();
  });
});
