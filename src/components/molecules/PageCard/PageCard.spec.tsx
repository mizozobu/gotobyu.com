import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import type { SVGProps } from 'react';
import * as stories from './PageCard.stories';

const { Example } = composeStories(stories);

describe('<PageCard />', () => {
  it('should render props.icon', () => {
    expect.assertions(1);
    const icon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
      <svg {...props}>mock icon</svg>
    );

    render(<Example icon={icon} />);

    expect(screen.getByText('mock icon')).toBeVisible();
  });

  it('should render props.name', () => {
    expect.assertions(1);
    const icon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
      <svg {...props}>mock icon</svg>
    );

    render(<Example icon={icon} />);

    expect(screen.getByText('What is Lorem Ipsum?')).toBeVisible();
  });

  it('should render props.description', () => {
    expect.assertions(1);
    const icon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
      <svg {...props} />
    );

    render(<Example icon={icon} />);

    expect(
      screen.getByText(
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      ),
    ).toBeVisible();
  });
});
