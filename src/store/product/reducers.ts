import {ProductState} from './models';
import {
  ProductActionTypes,
  GET_PRODUCTS,
  GET_PRODUCT,
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
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
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
