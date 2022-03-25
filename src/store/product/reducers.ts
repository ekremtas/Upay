import {ProductState} from './models';
import {
  ProductActionTypes,
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_LOADING,
} from './actionTypes';
const initialState: ProductState = {
  products: [],
  loading: false,
};

export function productReducer(
  state = initialState,
  action: ProductActionTypes,
): ProductState {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: action.payload,
        loading: false,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== action.meta.id,
        ),
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}