import React, {
  Component,
  type ComponentPropsWithoutRef,
  type ChangeEventHandler,
} from 'react';
import type { SearchBoxProvided } from 'react-instantsearch-core';

/**
 * Props for {@link CustomSearchBox}
 */
interface Props
  extends SearchBoxProvided,
    Omit<ComponentPropsWithoutRef<'input'>, 'value' | 'onChange'> {
  /** Debounce interval */
  delay: number;
  // /** Somehow not provided by {@link SearchBoxProvided} */
  // indexContextValue: unknown;
  // /** Somehow not provided by {@link SearchBoxProvided} */
  // createURL: unknown;
}

/**
 * State for CustomSearchBox
 */
interface State {
  /** Input value */
  value: string;
}

/**
 * Custom algolia SearchBox with debounce.
 * Use class component since debouncing wihtout using extra node_modules in functional component is tricky.
 * @see {@link https://www.algolia.com/doc/guides/building-search-ui/going-further/improve-performance/react/#debouncing}
 */
export class CustomSearchBox extends Component<Props, State> {
  private timerId: number | undefined;

  constructor(props: Props) {
    super(props);

    const { currentRefinement } = this.props;

    this.state = {
      value: currentRefinement,
    };
  }

  /**
   * Debounced change event handler
   * @param event Click event
   */
  private onChangeDebounced: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { refine, delay } = this.props;
    const { value } = event.currentTarget;

    clearTimeout(this.timerId);

    // must use "window.setTimeout" instead of timeout
    // since "timeout" return type is "NodeJS.timeout" which is not a number
    this.timerId = window.setTimeout(() => {
      refine(value);
    }, delay);

    this.setState({ value });
  };

  render(): JSX.Element {
    const { value } = this.state;
    const {
      refine,
      currentRefinement,
      isSearchStalled,
      /* eslint-disable @typescript-eslint/ban-ts-comment */
      /** Somehow not provided by {@link SearchBoxProvided} */
      // @ts-ignore
      indexContextValue,
      /** Somehow not provided by {@link SearchBoxProvided} */
      // @ts-ignore
      createURL,
      /* eslint-enable @typescript-eslint/ban-ts-comment */
      ...props
    } = this.props;

    return <input {...props} value={value} onChange={this.onChangeDebounced} />;
  }
}
