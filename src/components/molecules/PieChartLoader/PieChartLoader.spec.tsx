import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './PieChartLoader.stories';

const { Example } = composeStories(stories);

describe('<PieChartLoader />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('progressbar')).toBeVisible();
  });
});
