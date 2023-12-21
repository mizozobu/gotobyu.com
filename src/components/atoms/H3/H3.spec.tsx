import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './H3.stories';

const { Example } = composeStories(stories);

describe('<H3 />', () => {
  it('should render props.children', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
  });
});
