import { CartItem } from '../types/cartItem';
import { NavItem } from '../types/navBar';

import bannerImages from '../assets/images/banner.jpg';
import bannerMoreImages from '../assets/images/banner-more.jpg';
import mainImages from '../assets/images/detail-small.jpg';
import secondaryImages from '../assets/images/small-t-shirt.jpg';
import { Product } from '../types/product';

// constants.ts
export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const PRODUCTS = 'products';

export const NAV_BAR_ITEMS: NavItem[] = [
  { label: 'Home', destination: '/', isActive: true },
  { label: 'Shop', destination: '/shop', isActive: false },
  { label: 'About Us', destination: '/about', isActive: false },
  { label: 'Contact', destination: '/contact', isActive: false },
];

export const FOOTER_LIST_HOME = [
  { label: 'Product', destination: '/', isActive: false },
  { label: 'Categories', destination: '/', isActive: false },
  { label: 'Shop', destination: '/', isActive: false },
  { label: 'Log in', destination: '/', isActive: false },
];

export const FOOTER_LIST_SHOP = [
  { label: 'Jacket', destination: '/', isActive: false },
  { label: 'Shirt', destination: '/', isActive: false },
  { label: 'Jeans', destination: '/', isActive: false },
];

export const FOOTER_LIST_CATEGORY = [
  { label: 'Men', destination: '/', isActive: false },
  { label: 'Children', destination: '/', isActive: false },
  { label: 'Woman', destination: '/', isActive: false },
];

export const FOOTER_LIST_CONTACT = [{ label: 'mangcoding@gmail.com', destination: '/', isActive: false }];

export const BREADCRUMB_ITEMS = [
  { label: 'Home', url: '/' },
  { label: 'Products', url: '/products' },
  { label: 'Category', url: '/products/category' },
  { label: 'Current Page' },
];

export const PRODUCT_DETAILS: CartItem[] = [
  {
    id: '1',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQhjpAMGZr_n_ABGlri34mUcwi_mpNlTO1_essdAYk9IrlKhT53CbjMqxh44Lke-HDUO4wLmmCVL8Em31KLUql1Wf3ETUvI_28-kkJXb15eM2eOMBFCUUkT7GZ897B2bIDLBqre-D8&usqp=CAc',
    title: 'T-Shirt',
    price: 100,
    color: 'red',
    stock: 10,
    quantity: 5,
  },
  {
    id: '2',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQhjpAMGZr_n_ABGlri34mUcwi_mpNlTO1_essdAYk9IrlKhT53CbjMqxh44Lke-HDUO4wLmmCVL8Em31KLUql1Wf3ETUvI_28-kkJXb15eM2eOMBFCUUkT7GZ897B2bIDLBqre-D8&usqp=CAc',
    title: 'T-Shirt basic',
    price: 150,
    color: 'blue',
    stock: 5,
    quantity: 6,
  },
];

export const BANNER_IMAGES = [
  { id: 1, src: bannerImages },
  { id: 2, src: bannerMoreImages },
  { id: 3, src: bannerMoreImages },
];

export const PRODUCT_DETAIL_DATA: Product = {
  id: 1,
  images: [mainImages, secondaryImages, secondaryImages],
  title: 'Smart T-Shirt',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.',
  price: 40,
  colors: ['Black', 'Blue', 'Green'],
  sizes: ['S', 'M', 'L'],
  stock: 50,
  rate: 4,
  numberRating: 5555,
};

export const PRODUCTS_LIST: Product[] = [
  {
    id: 1,
    title: 'Blue T-Shirt',
    price: 14,
    images: [mainImages],
    colors: ['blue', 'white'],
    sizes: ['S', 'M', 'L'],
    description: 'Comfortable blue T-shirt',
    stock: 45,
    rate: 31,
    numberRating: 2,
    category: 'T-Shirt',
  },
  {
    id: 2,
    title: 'Premium T-Shirt',
    price: 61,
    images: [mainImages],
    colors: ['black', 'gray'],
    sizes: ['S', 'M', 'L'],
    description: 'High-quality premium T-shirt',
    stock: 83,
    rate: 99,
    numberRating: 4,
    category: 'T-Shirt',
  },
  {
    id: 3,
    title: 'Casual T-Shirt',
    price: 40,
    images: [mainImages],
    colors: ['green', 'red'],
    sizes: ['S', 'M', 'L'],
    description: 'Casual everyday T-shirt',
    stock: 6,
    rate: 73,
    numberRating: 3,
    category: 'T-Shirt',
  },
  {
    id: 4,
    title: 'Basic T-Shirt',
    price: 3,
    images: [mainImages],
    colors: ['yellow', 'purple'],
    sizes: ['S', 'M', 'L'],
    description: 'Basic affordable T-shirt',
    stock: 43,
    rate: 78,
    numberRating: 4,
    category: 'T-Shirt',
  },
  {
    id: 5,
    title: 'Stylish T-Shirt',
    price: 63,
    images: [mainImages],
    colors: ['orange', 'brown'],
    sizes: ['S', 'M', 'L'],
    description: 'Stylish designer T-shirt',
    stock: 87,
    rate: 37,
    numberRating: 4,
    category: 'T-Shirt',
  },
  {
    id: 6,
    title: 'Classic Jeans',
    price: 63,
    images: [mainImages],
    colors: ['blue', 'black'],
    sizes: ['S', 'M', 'L'],
    description: 'Classic denim jeans',
    stock: 87,
    rate: 37,
    numberRating: 4,
    category: 'Jeans',
  },
  {
    id: 7,
    title: 'Sporty T-Shirt',
    price: 63,
    images: [mainImages],
    colors: ['gray', 'navy'],
    sizes: ['S', 'M', 'L'],
    description: 'Sporty performance T-shirt',
    stock: 87,
    rate: 37,
    numberRating: 4,
    category: 'T-Shirt',
  },
  {
    id: 8,
    title: 'Graphic T-Shirt',
    price: 63,
    images: [mainImages],
    colors: ['red', 'pink'],
    sizes: ['S', 'M', 'L'],
    description: 'Creative graphic print T-shirt',
    stock: 87,
    rate: 37,
    numberRating: 4,
    category: 'T-Shirt',
  },
];

export const BREADCRUMB_ITEMS_CART = [{ label: 'Home', url: '/' }, { label: 'Cart' }];

export const BREADCRUMB_ITEMS_DETAIl = [
  { label: 'Home', url: '/' },
  { label: 'Shop', url: '/shop' },
];

export const TAB_LIST = ['T-Shirt', 'Jacket', 'Shirt', 'Jeans'];

export enum MESSAGE_SUCCESS {
  ADD_TO_CART = 'Item added to cart!',
  DELETE_CART = 'Delete item in cart',
}
