import _classNames from 'classnames';

declare global {
  const classNames: typeof _classNames;
  interface Window {
    dataLayer: Array<unknown>;
  }
}
