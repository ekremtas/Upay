import {ProductState} from './models';
import {
  CategoryActionTypes,
  GET_CATEGORİES,
  SET_SELECTED_CATEGORY,
} from './actionTypes';
const initialState: ProductState = {
  categories: [{id: 'all', name: 'all'}],
  selectedCategory: {id: 'all', name: 'all'},
};

export function categoryReducer(
  state = initialState,
  action: CategoryActionTypes,
): ProductState {
  switch (action.type) {
    case GET_CATEGORİES:
      return {
        ...state,
        categories: [...state.categories, ...action.payload],
      };
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
}
