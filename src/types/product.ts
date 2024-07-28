export interface Product {
  id: number;
  title: string;
  price: number;
  images?: string[];
  colors?: string[];
  sizes?: string[];
  description?: string;
  stock: number;
  rate?: number;
  numberRating?: number;
  category?: string;
}
