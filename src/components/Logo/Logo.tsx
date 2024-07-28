import { Link } from 'react-router-dom';
import companyLogo from '../../assets/images/logo.svg';
import styles from './logo.module.css';

const Logo = () => (
  <Link to="/">
    <h1>
      <svg height="34" width="160">
        <image width="35" height="34" href={companyLogo} />
        <text className={styles.logo} x="44" y="50%" dominantBaseline="middle">
          mangcoding Store
        </text>
      </svg>
    </h1>
  </Link>
);

export default Logo;
