import { composeStories } from '@storybook/react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as stories from './Tab.stories';

const { Example } = composeStories(stories);

describe('<Tab />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('tablist')).toBeVisible();
  });

  it('should switch tab on tab click', async () => {
    expect.assertions(9);
    const user = userEvent.setup();

    render(<Example />);

    expect(screen.queryByText('Tab Content 1')).toBeVisible();
    expect(screen.queryByText('Tab Content 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Tab Content 3')).not.toBeInTheDocument();

    await act(() =>
      user.click(
        screen.getByText(
          'This is a really long text. This is a really long text. This is a really long text.',
        ),
      ),
    );
    expect(screen.queryByText('Tab Content 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Tab Content 2')).toBeVisible();
    expect(screen.queryByText('Tab Content 3')).not.toBeInTheDocument();

    await act(() =>
      user.click(
        screen.getByText(
          'This is a really long text wrapped in a div. This is a really long text wrapped in a div.',
        ),
      ),
    );
    expect(screen.queryByText('Tab Content 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Tab Content 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Tab Content 3')).toBeVisible();
  });
});
