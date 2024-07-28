import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumbs';
import CartList from '../../components/CartList/CartList';
import CartSummaryInfo from '../../components/CartSummaryInfo/CartSummaryInfo';
import { useCart } from '../../hook/CartContext';
import MainLayout from '../../layouts/MainLayout';
import styles from './cart.module.css';
import stylesUtils from '../../styles/modules/stylesUtils.module.css';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import { useToast } from '../../hook/ToastContext';
import { BREADCRUMB_ITEMS_CART, MESSAGE_SUCCESS } from '../../constants';

const Cart = () => {
  const { productsInCart, updateQuantity, removeFromCart, clearCart } = useCart();
  const { addToast } = useToast(); // Get addToast function
  const [delayedProductsInCart, setDelayedProductsInCart] = useState<typeof productsInCart>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isDisable = true;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedProductsInCart(productsInCart);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, [productsInCart]);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleDelete = (id: string) => {
    removeFromCart(id);
    addToast(MESSAGE_SUCCESS.DELETE_CART, true);
  };

  const bannerContent = (
    <div className={styles.fluidContainer}>
      <div className={`${stylesUtils.container} ${styles.banner}`}>
        <Breadcrumb listItems={BREADCRUMB_ITEMS_CART} />
        <h2 className={styles.title}>Cart</h2>
      </div>
    </div>
  );

  const totalPrice = (productsInCart: { price: number; quantity: number }[]) => {
    return productsInCart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const total = totalPrice(delayedProductsInCart);

  const checkout = () => {
    clearCart();
  };

  return (
    <MainLayout bannerContent={bannerContent}>
      {isLoading ? (
        <Loading classStyle={stylesUtils.loading} />
      ) : delayedProductsInCart.length > 0 ? (
        <section className={`${stylesUtils.container} ${styles.cart}`}>
          <h2 className={styles.titleCart}>Cart Product</h2>
          <div className={styles.group}>
            <CartList
              cartItems={delayedProductsInCart}
              onQuantityChange={handleQuantityChange}
              onChangeDelete={handleDelete}
            />
            <div className={styles.checkout}>
              <CartSummaryInfo
                numberProduct={delayedProductsInCart.length}
                onClickCheckoutButton={checkout}
                totalPrice={total}
              />
            </div>
          </div>
        </section>
      ) : (
        <div className={stylesUtils.container}>
          <div className={`${styles.emptyGroup} ${styles.cart}`}>
            <div className={styles.empty}>
              No product in the cart. <Link to={'/'}>shopping</Link> to add item
            </div>
            <div className={styles.checkout}>
              <CartSummaryInfo
                numberProduct={delayedProductsInCart.length}
                onClickCheckoutButton={checkout}
                totalPrice={total}
                isDisable={isDisable}
              />
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Cart;
