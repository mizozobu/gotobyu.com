import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './PartialCircle.stories';

const { Example } = composeStories(stories);

describe('<PartialCircle />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByTestId('PartialCircle')).toBeVisible();
  });
});
