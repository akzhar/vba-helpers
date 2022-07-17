import { THelper } from '@services/Api';

import { ActionTypes, TAction } from '@store/actions';

export type THelpersState = {
  isLoading: boolean,
  items: THelper[]
};

export const initialHelpersState: THelpersState = {
  isLoading: false,
  items : []
};

const reducerSearch = (state: THelpersState = initialHelpersState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.SET_HELPERS_LOADING: {
      return {...state, isLoading: action.payload};
    }
    case ActionTypes.SET_HELPERS_ITEMS: {
      return {...state, items: action.payload};
    }
    case ActionTypes.RESET_HELPERS_ITEMS: {
      return {...state, items: []};
    }
    default:
      return {...state};
  }
};

export default reducerSearch;
