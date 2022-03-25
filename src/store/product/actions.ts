import {Product} from './models';
import {
  ProductActionTypes,
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_LOADING,
} from './actionTypes';
import axios from 'axios';
import {Dispatch} from 'redux';
import {baseUrl} from '../../config';

export function getProducts() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SET_LOADING,
    });
    axios
      .get(`${baseUrl}/products`)
      .then(result => {
        dispatch({
          type: GET_PRODUCTS,
          payload: result.data,
        });
      })
      .catch(err => {
        console.log('Axios err', err);
      });
  };
}

export function addProduct(newProduct: Product): ProductActionTypes {
  return {
    type: ADD_PRODUCT,
    payload: newProduct,
  };
}

export function deleteProduct(id: number): ProductActionTypes {
  return {
    type: DELETE_PRODUCT,
    meta: {
      id,
    },
  };
}
