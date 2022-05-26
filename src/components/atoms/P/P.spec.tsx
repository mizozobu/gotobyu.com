import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './P.stories';

const { Example } = composeStories(stories);

describe('<P />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByText('Paragraph')).toBeVisible();
  });
});
