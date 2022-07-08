import { ActionTypes, TAction } from '@store/actions';
import { INITIAL_SEARCH_TYPE } from '@components/SearchForm';

export type TSearchState = {
  type: string,
  query: string
};

export const initialSearchState: TSearchState = {
  type: INITIAL_SEARCH_TYPE,
  query: ''
};

const reducerSearch = (state: TSearchState = initialSearchState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.RESET_SEARCH: {
      return initialSearchState;
    }
    case ActionTypes.SET_SEARCH_TYPE: {
      state.type = action.payload;
      return state;
    }
    case ActionTypes.SET_SEARCH_QUERY: {
      state.query = action.payload;
      return state;
    }
    default:
      return {...state};
  }
};

export default reducerSearch;
