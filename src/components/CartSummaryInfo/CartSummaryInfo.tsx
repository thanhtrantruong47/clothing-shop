import Button from '../Button/Button';
import styles from './cartSummaryInfo.module.css';
import stylesUtils from '../../styles/modules/stylesUtils.module.css';
import { Link } from 'react-router-dom';

interface CartSummaryInfoProps {
  onClickCheckoutButton: () => void;
  numberProduct: number;
  totalPrice: number;
  isDisable?: boolean;
}

const CartSummaryInfo = ({ numberProduct, totalPrice, onClickCheckoutButton, isDisable }: CartSummaryInfoProps) => (
  <div className={styles.container}>
    <p className={styles.product}>{numberProduct} Product</p>
    <div className={`${stylesUtils.flexCenter} ${styles.total}`}>
      <label className={styles.desc}>Total</label>
      <p>$ {totalPrice} USD</p>
    </div>
    <div className={styles.group}>
      <Link to={'/order'}>
        <Button classStyle={styles.button} onClick={onClickCheckoutButton} content="Checkout" disabled={isDisable} />
      </Link>
    </div>
  </div>
);

export default CartSummaryInfo;
