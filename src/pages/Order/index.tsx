import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import CheckedIcon from '../../components/Icon/CheckedIcon';
import styles from './order.module.css';

const Order = () => {
  return (
    <div className={styles.order}>
      <CheckedIcon />
      <h2 className={styles.title}>Order Successful</h2>
      <p>Thank you so much order</p>
      <Link to={'/'}>
        <Button classStyle={styles.btn} content="Home Page" />
      </Link>
    </div>
  );
};

export default Order;
