import {Product} from './models';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const SET_LOADING = 'SET_LOADING';

interface GetProductsAction {
  type: typeof GET_PRODUCTS;
  payload: Product[];
}

interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: Product;
}

interface DeleteProductAction {
  type: typeof DELETE_PRODUCT;
  meta: {
    id: number;
  };
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

export type ProductActionTypes =
  | AddProductAction
  | DeleteProductAction
  | GetProductsAction
  | SetLoadingAction;
