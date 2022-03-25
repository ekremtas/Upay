export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  avatar: string;
  developerEmail: string;
}

export interface ProductState {
  products: Product[];
  product: Product;
  loading: boolean;
}
