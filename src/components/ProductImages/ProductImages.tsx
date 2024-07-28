import { useState } from 'react';
import styles from './productImages.module.css';
import stylesUtils from '../../styles/modules/stylesUtils.module.css';
import unAvailableImage from '../../assets/images/no-image.jpg';

interface ProductImagesProps {
  images: string[];
  title: string;
}

const ProductImages = ({ images, title }: ProductImagesProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerImage}>
        <img
          className={styles.detailImage}
          src={images[activeIndex]}
          onError={e => (e.currentTarget.src = unAvailableImage)}
          alt={`${title} image ${images[activeIndex]}`}
        />
      </div>

      <ul className={styles.imageGroup}>
        {images.slice(0, 3).map((image, index) => (
          <li
            key={`${image}${index}`}
            className={`${stylesUtils.pointer} ${index === activeIndex ? styles.imageActive : ''}`}
            onClick={() => handleImageClick(index)}>
            <img
              className={styles.image}
              src={image}
              alt={`${title} image ${index + 1}`}
              onError={e => (e.currentTarget.src = unAvailableImage)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductImages;
