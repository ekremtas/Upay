export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  avatar: string;
  developerEmail: string;
}

export interface ProductState {
  products: Product[];
  loading: boolean;
}
