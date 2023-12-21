import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './PieChart.stories';

const testCases = Object.values(composeStories(stories)).map((Story) => [
  Story.storyName ?? '',
  Story,
]);

describe('<PieChart />', () => {
  it.each(testCases)('should be rendered (%s)', (_storyName, Story) => {
    expect.assertions(1);

    render(<Story />);

    expect(screen.getByRole('img')).toBeVisible();
  });
});
