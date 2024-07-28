// NavBarItem.tsx
import { Link } from 'react-router-dom';
import stylesUtilstyles from '../../styles/modules/stylesUtils.module.css';
import styles from './navBarItem.module.css';

interface NavBarItemProps {
  label: string;
  destination: string;
  isActive: boolean;
}

const NavBarItem = ({ label, destination, isActive }: NavBarItemProps) => (
  <li className={`${styles.navBarItem} ${isActive ? styles.active : ''}`}>
    <Link className={`${stylesUtilstyles.link} ${isActive ? styles.activeLink : ''}`} to={destination}>
      {label}
    </Link>
  </li>
);

export default NavBarItem;
