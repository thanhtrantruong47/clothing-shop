import MainLayout from '../../layouts/MainLayout';
import stylesUtils from '../../styles/modules/stylesUtils.module.css';
import styles from './notFound.module.css';

const NotFound = () => {
  return (
    <MainLayout>
      <h2 className={`${stylesUtils.container} ${styles.title}`}>Page is under development</h2>;
    </MainLayout>
  );
};

export default NotFound;
