import { CartItem as CartItemType } from '../../types/cartItem';
import CartItem from '../CartItem/CartItem';
import styles from './cartList.module.css';

interface CartListProps {
  cartItems: CartItemType[];
  onQuantityChange: (id: string, quantity: number) => void;
  onChangeDelete: (id: string) => void;
}

const CartList = ({ cartItems, onQuantityChange, onChangeDelete }: CartListProps) => {
  return (
    <div className={styles.container}>
      {cartItems.map(({ id, image, title, price, color, quantity, stock }) => (
        <CartItem
          key={id}
          id={id}
          color={color}
          image={image}
          price={price}
          quantity={quantity}
          stock={stock}
          title={title}
          onQuantityChange={onQuantityChange}
          onChangeDelete={onChangeDelete}
        />
      ))}
    </div>
  );
};

export default CartList;
