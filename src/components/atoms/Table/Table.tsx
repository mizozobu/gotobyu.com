import classNames from 'classnames';
import type { ComponentPropsWithoutRef, CSSProperties } from 'react';
import styles from './Table.module.css';

/**
 * Props for {@link Table}
 */
interface Props extends ComponentPropsWithoutRef<'table'> {
  /** Color for thick border
   * - bottom of header
   * - top of footer
   * - right of the first column
   */
  thickBorderColor?: string;
}

/**
 * Styled `<table>`
 */
export const Table = ({
  className,
  thickBorderColor,
  ...props
}: Props): JSX.Element => (
  <div
    className={classNames(
      'overflow-x-auto overflow-y-hidden whitespace-nowrap rounded-md',
      className,
    )}
    style={
      {
        '--thick-border-color': thickBorderColor ?? '',
      } as CSSProperties
    }
  >
    <table
      {...props}
      className={classNames('min-w-full table-auto', styles.table)}
    />
  </div>
);
