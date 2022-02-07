import { PoweredBy } from 'react-instantsearch-dom';
import styles from './CustomPoweredBy.module.css';

export const CustomPoweredBy = () => (
  <PoweredBy
    className={classNames(styles['powered-by'], 'flex items-center')}
  />
);
