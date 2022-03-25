export interface Category {
  id: string;
  name: string;
}

export interface ProductState {
  categories: Category[];
  selectedCategory: Category;
}
