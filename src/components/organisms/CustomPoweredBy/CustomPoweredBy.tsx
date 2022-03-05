import classNames from 'classnames';
import { PoweredBy } from 'react-instantsearch-dom';
import styles from './CustomPoweredBy.module.css';

/**
 * Custom algolia PoweredBy
 */
export const CustomPoweredBy = () => (
  <PoweredBy
    className={classNames(styles['powered-by'], 'flex items-center')}
  />
);
