// MainLayout.tsx
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './mainLayout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  bannerContent?: React.ReactNode; // Define bannerContent as a prop
}

const MainLayout: React.FC<LayoutProps> = ({ children, bannerContent }) => {
  return (
    <>
      <Header />
      {bannerContent}
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
