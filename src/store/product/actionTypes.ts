import {Product} from './models';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CLEAR_PRODUCT = 'CLEAR_PRODUCT';
export const SET_LOADING = 'SET_LOADING';

interface GetProductsAction {
  type: typeof GET_PRODUCTS;
  payload: Product[];
}

interface GetProductAction {
  type: typeof GET_PRODUCT;
  payload: Product;
}

interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: Product;
}

interface DeleteProductAction {
  type: typeof DELETE_PRODUCT;
  meta: {
    id: string;
  };
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface ClearProductAction {
  type: typeof CLEAR_PRODUCT;
}

export type ProductActionTypes =
  | AddProductAction
  | GetProductAction
  | DeleteProductAction
  | GetProductsAction
  | SetLoadingAction
  | ClearProductAction;
