import ProductDetail from '../../components/ProductDetail/ProductDetail';
import { Product } from '../../types/product';
import ProductList from '../../components/ProductList/ProductList';
import styles from './detail.module.css';
import MainLayout from '../../layouts/MainLayout';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductAPIService from '../../services/ProductAPIService';
import Loading from '../../components/Loading';
import stylesUtils from '../../styles/modules/stylesUtils.module.css';
import { Products } from '../../mock/products'; // Import mock data

const productsPerPage = 8;

const Details = () => {
  const { id } = useParams(); // Assuming id is passed as a route parameter

  const [product, setProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  /**
   * Fetches the product details by ID.
   * Updates the product state with the fetched product.
   * This effect runs whenever the `id` state changes.
   */
  useEffect(() => {
    const fetchProductData = async () => {
      setIsLoading(true);

      try {
        const productService = new ProductAPIService();
        const response = await productService.getById(`${id}`);

        if (response.isSuccess && response.data !== undefined) {
          setProduct(response.data); // Set the fetched product details
        } else {
          console.error('Failed to fetch product details:', response.errors);
          // Fallback to mock data if the product is not found or API fails
          const mockProduct = Products.find(product => product.id.toString() === id) || null;
          setProduct(mockProduct);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
        // Fallback to mock data if there is an error
        const mockProduct = Products.find(product => product.id.toString() === id) || null;
        setProduct(mockProduct);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      // Ensure id is not undefined
      fetchProductData();
    }
  }, [id]);

  /**
   * Fetches related products based on the category of the current product.
   * Updates the products list and loading state.
   * This effect runs whenever the `product` state changes.
   */
  useEffect(() => {
    const fetchProductsData = async () => {
      if (!product) return;

      setIsLoading(true); // Start loading

      try {
        const productService = new ProductAPIService();
        const response = await productService.getList({ category: product.category || '' });

        if (response.isSuccess && response.data !== undefined) {
          setProducts(response.data.slice(0, productsPerPage)); // Initially load first page of products
          setHasMore(response.data.length > productsPerPage);
        } else {
          console.error('Failed to fetch related products:', response.errors);
          // Filter mock data by category
          const filteredProducts = Products.filter(p => p.category === product.category);
          setProducts(filteredProducts.slice(0, productsPerPage));
          setHasMore(filteredProducts.length > productsPerPage); // Check if there are more mock products
        }
      } catch (error) {
        console.error('Error fetching related products:', error);
        // Filter mock data by category
        const filteredProducts = Products.filter(p => p.category === product.category);
        setProducts(filteredProducts.slice(0, productsPerPage));
        setHasMore(filteredProducts.length > productsPerPage); // Check if there are more mock products
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchProductsData();
  }, [product]);

  /**
   * Handles the load more event to fetch additional products.
   * Appends the new products to the existing product list and increments the current page.
   */
  const handleLoadMore = async () => {
    if (!product) return;

    try {
      const productService = new ProductAPIService();
      const response = await productService.getList({ category: product.category || '' });

      if (response.isSuccess && response.data !== undefined) {
        const newProducts = response.data.slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);
        setProducts([...products, ...newProducts]); // Append new products to existing list
        setCurrentPage(currentPage + 1); // Increment current page
        setHasMore(response.data.length > (currentPage + 1) * productsPerPage); // Check if there are more products
      } else {
        console.error('Failed to fetch more related products:', response.errors);
        // Filter mock data by category
        const filteredProducts = Products.filter(p => p.category === product.category);
        const newProducts = filteredProducts.slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);
        setProducts([...products, ...newProducts]);
        setCurrentPage(currentPage + 1);
        setHasMore(filteredProducts.length > (currentPage + 1) * productsPerPage); // Check if there are more mock products
      }
    } catch (error) {
      console.error('Error fetching more related products:', error);
      // Filter mock data by category
      const filteredProducts = Products.filter(p => p.category === product.category);
      const newProducts = filteredProducts.slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);
      setProducts([...products, ...newProducts]);
      setCurrentPage(currentPage + 1);
      setHasMore(filteredProducts.length > (currentPage + 1) * productsPerPage); // Check if there are more mock products
    }
  };

  return (
    <MainLayout>
      <div>
        <div className={styles.product}>
          {isLoading ? (
            <Loading classStyle={stylesUtils.loading} />
          ) : (
            product && (
              <ProductDetail
                colors={product.colors || []}
                description={product.description || ''}
                images={product.images || []}
                numberRating={product.numberRating || 0}
                price={product.price || 0}
                rate={product.rate || 0}
                sizes={product.sizes || []}
                stock={product.stock || 0}
                title={product.title || ''}
              />
            )
          )}
        </div>

        <div className={styles.list}>
          <p className={styles.title}>Same Product</p>
          {isLoading ? (
            <Loading classStyle={stylesUtils.loading} />
          ) : (
            <ProductList products={products} onClick={handleLoadMore} hasMore={hasMore} />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Details;
