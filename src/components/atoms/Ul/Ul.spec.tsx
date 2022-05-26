import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './Ul.stories';

const { Example } = composeStories(stories);

describe('<Ul />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('list')).toBeVisible();
  });
});
