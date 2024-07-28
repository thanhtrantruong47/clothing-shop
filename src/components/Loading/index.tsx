import styles from './index.module.css';

const Loading = ({ classStyle = '' }: { classStyle?: string }) => {
  return (
    <div className={`${styles.loaderContainer} ${classStyle}`}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
