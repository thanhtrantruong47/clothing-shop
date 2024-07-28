import { Product } from '../../types/product';
import Button from '../Button/Button';
import ProductCard from '../ProductCard/ProductCart';
import styles from './productList.module.css';
import stylesUtils from '../../styles/modules/stylesUtils.module.css';

interface ProductListProps {
  products: Product[];
  onClick: () => void;
  hasMore: boolean; // New prop to indicate if there are more products
}

const ProductList = ({ products, onClick, hasMore }: ProductListProps) => {
  return (
    <div className={`${stylesUtils.container} ${styles.wrapper}`}>
      <div className={styles.list}>
        {products.map(({ id, title, price, description, rate, numberRating, images }) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            description={description || ''}
            image={images ? images[0] : ''}
            numberRating={numberRating || 0}
            price={price}
            rate={rate || 0}
          />
        ))}
      </div>
      <Button classStyle={styles.btn} content="See More" onClick={onClick} disabled={!hasMore} />
    </div>
  );
};

export default ProductList;
