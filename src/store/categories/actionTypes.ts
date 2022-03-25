import {Category} from './models';
export const GET_CATEGORİES = 'GET_CATEGORİES';
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

interface GetCategoriesAction {
  type: typeof GET_CATEGORİES;
  payload: Category[];
}

interface SetSelectedCategoryAction {
  type: typeof SET_SELECTED_CATEGORY;
  payload: Category;
}

export type CategoryActionTypes =
  | GetCategoriesAction
  | SetSelectedCategoryAction;
