import { TCategory } from '@services/Api';

import { ActionTypes, TAction } from '@store/actions';

export type TCategoriesState = {
  isLoading: boolean,
  items: TCategory[]
};

export const initialCategoriesState: TCategoriesState = {
  isLoading: false,
  items : []
};

const reducerSearch = (state: TCategoriesState = initialCategoriesState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.SET_CATEGORIES_LOADING: {
      return {...state, isLoading: action.payload};
    }
    case ActionTypes.SET_CATEGORIES_ITEMS: {
      return {...state, items: action.payload};
    }
    case ActionTypes.RESET_CATEGORIES_ITEMS: {
      return {...state, items: []};
    }
    default:
      return {...state};
  }
};

export default reducerSearch;
