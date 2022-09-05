import classNames from 'classnames';
import type { ComponentPropsWithoutRef, CSSProperties } from 'react';
import styles from './Table.module.css';

/**
 * Props for {@link Table}
 */
interface Props extends ComponentPropsWithoutRef<'table'> {
  /** Style to pass */
  style?: Style<{
    /** Color for thick border applied to
     * - bottom of header
     * - top of footer
     * - right of the first column
     */
    '--thick-border-color'?: CSSProperties['borderColor'];
  }>;
}

/**
 * Styled `<table>`
 */
export const Table = ({ className, ...props }: Props): JSX.Element => (
  <div
    className={classNames(
      'overflow-x-auto overflow-y-hidden whitespace-nowrap rounded-md',
      className,
    )}
    data-testid='Table'
  >
    <table
      className={classNames('min-w-full table-auto', styles.table)}
      {...props}
    />
  </div>
);
