import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './TableCaption.stories';

const { WithoutDescription, WithDescription } = composeStories(stories);

describe('<TableCaption />', () => {
  it('should render props.children as caption and description', () => {
    expect.assertions(1);

    render(<WithoutDescription />);

    expect(screen.getAllByText('table')).toHaveLength(2);
  });

  it('should render props.children as caption and props.description as description', () => {
    expect.assertions(2);

    render(<WithDescription />);

    expect(screen.getByText('table')).toBeVisible();
    expect(screen.getByText('table description')).toBeVisible();
  });
});
