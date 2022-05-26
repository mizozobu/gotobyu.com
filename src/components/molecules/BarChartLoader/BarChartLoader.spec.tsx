import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './BarChartLoader.stories';

const { Example } = composeStories(stories);

describe('<BarChartLoader />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('progressbar')).toBeVisible();
  });

  it('should render props.barCount bars', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getAllByTestId('BarChartLoader-bar')).toHaveLength(9);
  });
});
