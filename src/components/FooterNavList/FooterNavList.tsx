import { Link } from 'react-router-dom';
import styles from './footerNavList.module.css';
import { NavItem } from '../../types/navBar';

interface FooterNavListProps {
  items: NavItem[];
  title: string;
}

const FooterNavList = ({ items, title }: FooterNavListProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.item}>
        {items.map(({ label, destination }) => (
          <li key={label}>
            <Link className={styles.link} to={destination}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavList;
