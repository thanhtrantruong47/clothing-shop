import { Product } from '../types/product';
import APIService from './APIService';

class ProductAPIService extends APIService<Product> {
  constructor() {
    super('products');
  }
}

export default ProductAPIService;
