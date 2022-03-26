import {Product} from './models';
import {
  ProductActionTypes,
  GET_PRODUCTS,
  GET_PRODUCT,
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

export function getProduct(id: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SET_LOADING,
    });
    axios
      .get(`${baseUrl}/products/${id}`)
      .then(result => {
        dispatch({
          type: GET_PRODUCT,
          payload: result.data,
        });
      })
      .catch(err => {
        console.log('Axios err', err);
      });
  };
}

export function addProduct(newProduct: Product, callback: Function) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SET_LOADING,
    });
    axios
      .post(`${baseUrl}/products`, newProduct)
      .then(result => {
        dispatch({
          type: ADD_PRODUCT,
          payload: result.data,
        });
        callback && callback();
      })
      .catch(err => {
        console.log('Axios err', err);
      });
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
