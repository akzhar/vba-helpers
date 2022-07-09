import { ActionTypes, TAction } from '@store/actions';
import { INITIAL_SEARCH_TYPE } from '@components/SearchForm';

export type TSearchState = {
  params: {
    type: string,
    query: string
  },
  isLoading: boolean
};

export const initialSearchState: TSearchState = {
  params: {
    type: INITIAL_SEARCH_TYPE,
    query: ''
  },
  isLoading: false
};

const reducerSearch = (state: TSearchState = initialSearchState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.RESET_SEARCH: {
      return initialSearchState;
    }
    case ActionTypes.SET_SEARCH_PARAMS: {
      return {...state, params: action.payload};
    }
    case ActionTypes.SET_SEARCH_LOADING: {
      return {...state, isLoading: action.payload};
    }
    default:
      return {...state};
  }
};

export default reducerSearch;
