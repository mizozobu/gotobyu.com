import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './H2.stories';

const { Example } = composeStories(stories);

describe('<H2 />', () => {
  it('should render props.children', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
  });
});
