export interface Product {
  id: number;
  Name: string;
  Price: number;
  Category: string;
  Description: string;
  Avatar: string;
  DeveloperEmail: string;
}

export interface ProductState {
  products: Product[];
  loading: boolean;
}
