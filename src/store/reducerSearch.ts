import { ActionTypes, TAction } from '@store/actions';
import { INITIAL_SEARCH_TYPE } from '@components/SearchForm';

export type TSearchState = {
  params: {
    type: string,
    query: string
  }
};

export const initialSearchState: TSearchState = {
  params: {
    type: INITIAL_SEARCH_TYPE,
    query: ''
  }
};

const reducerSearch = (state: TSearchState = initialSearchState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_PARAMS: {
      return {...state, params: action.payload};
    }
    default:
      return {...state};
  }
};

export default reducerSearch;
