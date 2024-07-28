import stylesUtils from '../../styles/modules/stylesUtils.module.css';
import StarIcon from '../Icon/StarIcon';
import styles from './productCart.module.css';
import { Number } from '../../utils/number';
import BookMarkIcon from '../Icon/BookMarkIcon';
import LikedIcon from '../Icon/LikedIcon';
import { Link } from 'react-router-dom';
import unAvailableImage from '../../assets/images/no-image.jpg';
import Button from '../Button/Button';

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
  rate: number;
  numberRating: number;
  onChange?: () => void;
}

const ProductCard = ({ id, image, title, price, description, numberRating, rate, onChange }: ProductCardProps) => (
  <Link className={stylesUtils.link} to={`/products/${id}`}>
    <div className={styles.product}>
      <div className={`${styles.imageGroup} ${stylesUtils.relative}`}>
        <img
          className={styles.productImage}
          src={image}
          onError={e => (e.currentTarget.src = unAvailableImage)}
          alt={title}
        />
        <div className={styles.bookMark}>
          <Button className={stylesUtils.pointer} aria-label="mark product" icon={BookMarkIcon} onChange={onChange} />
          <Button className={stylesUtils.pointer} aria-label="like product" icon={LikedIcon} onChange={onChange} />
        </div>
      </div>
      <div className={styles.group}>
        <div className={`${styles.nameGroup} ${stylesUtils.flexCenter}`}>
          <p>{title}</p>
          <span>{price}$</span>
        </div>
        <p className={styles.desc}>{description}</p>
        <div className={`${styles.ratingGroup} ${stylesUtils.flexCenter}`}>
          <div className={`${styles.numberRating} ${stylesUtils.flexCenter}`}>
            {Array.from({ length: numberRating }).map((_, index) => (
              <StarIcon key={`${title}_${index}`} />
            ))}
          </div>
          <p className={styles.ratingGroup}>({Number(rate)})</p>
        </div>
      </div>
    </div>
  </Link>
);

export default ProductCard;
