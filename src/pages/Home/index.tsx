import HeroSection from '../../components/HeroSection/HeroSection';
import ProductList from '../../components/ProductList/ProductList';
import MainLayout from '../../layouts/MainLayout';
import { Product } from '../../types/product';
import styles from './home.module.css';
import TabList from '../../components/TabList/TabList';
import { useEffect, useState } from 'react';
import ProductAPIService from '../../services/ProductAPIService';
import stylesUtils from '../../styles/modules/stylesUtils.module.css';
import Loading from '../../components/Loading';
import { Products } from '../../mock/products'; // Import mock data
import { TAB_LIST } from '../../constants';

const productsPerPage = 8;

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [tab, setTab] = useState('T-Shirt');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  // Fetch products based on the selected tab
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const productService = new ProductAPIService();
        const response = await productService.getList({ category: tab });

        if (response.isSuccess && response.data !== undefined) {
          const newProducts = response.data.slice(0, productsPerPage);
          setProducts(newProducts);
          setCurrentPage(1);
          setHasMore(response.data.length > productsPerPage);
        } else {
          console.error('Failed to fetch products:', response.errors);
          // Filter mock data by category
          const filteredProducts = Products.filter(product => product.category === tab);
          setProducts(filteredProducts.slice(0, productsPerPage));
          setHasMore(filteredProducts.length > productsPerPage);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        // Filter mock data by category
        const filteredProducts = Products.filter(product => product.category === tab);
        setProducts(filteredProducts.slice(0, productsPerPage));
        setHasMore(filteredProducts.length > productsPerPage);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [tab]);

  // Handle tab change to load new products
  const handleTabChange = (item: string) => {
    setTab(item);
    setCurrentPage(1); // Reset page when tab changes
  };

  // Load more products when button is clicked
  const handleLoadMore = async () => {
    if (!hasMore) return; // If no more products to load

    try {
      const productService = new ProductAPIService();
      const response = await productService.getList({ category: tab });

      if (response.isSuccess && response.data !== undefined) {
        const newProducts = response.data.slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);
        setProducts([...products, ...newProducts]);
        setCurrentPage(currentPage + 1);
        setHasMore(response.data.length > (currentPage + 1) * productsPerPage);
      } else {
        console.error('Failed to fetch more products:', response.errors);
        const filteredProducts = Products.filter(product => product.category === tab);
        const newProducts = filteredProducts.slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);
        setProducts([...products, ...newProducts]);
        setCurrentPage(currentPage + 1);
        setHasMore(filteredProducts.length > (currentPage + 1) * productsPerPage);
      }
    } catch (error) {
      console.error('Error fetching more products:', error);
      const filteredProducts = Products.filter(product => product.category === tab);
      const newProducts = filteredProducts.slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);
      setProducts([...products, ...newProducts]);
      setCurrentPage(currentPage + 1);
      setHasMore(filteredProducts.length > (currentPage + 1) * productsPerPage);
    }
  };

  return (
    <MainLayout bannerContent={<HeroSection />}>
      <section className={`${stylesUtils.container} ${styles.section}`}>
        <div className={`${stylesUtils.flexCenter} ${styles.head}`}>
          <h3>Choose from the best products</h3>
          <h2>Our Best Seller</h2>
          <TabList listNavItems={TAB_LIST} onChangeTab={handleTabChange} />
        </div>
        {isLoading ? (
          <Loading classStyle={stylesUtils.loading} />
        ) : (
          <>
            {products.length === 0 ? (
              <p className={styles.noProducts}>No products available in this category.</p>
            ) : (
              <ProductList products={products} onClick={handleLoadMore} hasMore={hasMore} />
            )}
          </>
        )}
      </section>
    </MainLayout>
  );
};

export default Home;
