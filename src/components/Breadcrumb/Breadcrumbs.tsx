import { Link } from 'react-router-dom';
import stylesUtils from '../../styles/modules/stylesUtils.module.css';
import styles from './breadcrumbs.module.css';
import { memo } from 'react';

interface BreadcrumbProps {
  listItems: {
    label: string;
    url?: string;
  }[];
}

const Breadcrumb = ({ listItems }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
        {listItems.map((item, index) => {
          const isLastItem = index === listItems.length - 1;

          return (
            <li key={item.label} className={styles.breadcrumbItem}>
              {item.url ? (
                <Link className={stylesUtils.link} to={item.url}>
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {!isLastItem && ' / '}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default memo(Breadcrumb);
