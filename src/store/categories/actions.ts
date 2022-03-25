import {
  CategoryActionTypes,
  GET_CATEGORİES,
  SET_SELECTED_CATEGORY,
} from './actionTypes';
import axios from 'axios';
import {Dispatch} from 'redux';
import {baseUrl} from '../../config';
import {Category} from './models';

export function getCategories() {
  return (dispatch: Dispatch) => {
    axios
      .get(`${baseUrl}/categories`)
      .then(result => {
        dispatch({
          type: GET_CATEGORİES,
          payload: result.data,
        });
      })
      .catch(err => {
        console.log('Axios err', err);
      });
  };
}

export function setSelectedCategory(
  selectedCategory: Category,
): CategoryActionTypes {
  return {
    type: SET_SELECTED_CATEGORY,
    payload: selectedCategory,
  };
}
