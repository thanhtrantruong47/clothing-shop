import Button from '../Button/Button';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import styles from './heroSection.module.css';
import stylesUtils from '../../styles/modules/stylesUtils.module.css';
import { BANNER_IMAGES } from '../../constants';
import { memo } from 'react';

const HeroSection = () => {
  return (
    <section className={styles.fluidContainer}>
      <div className={`${stylesUtils.container}`}>
        <div className={`${styles.hero}`}>
          <div className={styles.content}>
            <h2 className={styles.title}>Get the Latest Dress Models From Us</h2>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam
              bibendum mi sed sem finibus ullamcorper
            </p>
            <div className={styles.buttonContainer}>
              <Button classStyle={styles.button} content="Shop now" />
            </div>
          </div>
          <HeroCarousel images={BANNER_IMAGES} />
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
