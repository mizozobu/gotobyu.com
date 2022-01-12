import type { ComponentPropsWithoutRef } from 'react';
import styles from './Table.module.css';

interface Props extends ComponentPropsWithoutRef<'table'> {
  thickBorderColor?: string;
}

export const Table = ({
  className = '',
  thickBorderColor,
  ...props
}: Props) => (
  <div
    className={classNames(
      'rounded-md overflow-x-auto overflow-y-hidden whitespace-nowrap',
      className,
    )}
  >
    <table
      {...props}
      className={classNames('min-w-full table-auto', styles.table)}
    />
    <style jsx>{`
      .${styles.table} {
        ${thickBorderColor ? `--thick-border-color: ${thickBorderColor}` : ''};
      }
    `}</style>
  </div>
);
