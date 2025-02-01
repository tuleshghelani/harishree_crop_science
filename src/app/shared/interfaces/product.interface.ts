export interface Product {
  name: string;
  image: string;
  description: string;
  fullDescription?: string;
}

export interface ProductCategory {
  name: string;
  products: Product[];
} 