import classNames from 'classnames';
import type { ComponentPropsWithoutRef, CSSProperties } from 'react';
import styles from './Table.module.css';

/**
 * Props for {@link Table}
 */
interface Props extends ComponentPropsWithoutRef<'table'> {
  /** Color for thick border applied to
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
  thickBorderColor = '',
  ...props
}: Props): JSX.Element => (
  <div
    className={classNames(
      'overflow-x-auto overflow-y-hidden whitespace-nowrap rounded-md',
      className,
    )}
    data-testid='Table'
  >
    <table
      {...props}
      className={classNames('min-w-full table-auto', styles.table)}
      style={
        {
          '--thick-border-color': thickBorderColor,
        } as CSSProperties
      }
    />
  </div>
);
