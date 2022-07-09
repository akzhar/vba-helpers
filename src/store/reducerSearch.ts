import { ActionTypes, TAction } from '@store/actions';
import { INITIAL_SEARCH_TYPE } from '@components/SearchForm';

export type TSearchState = {
  params: {
    type: string,
    query: string
  },
  run: boolean
};

export const initialSearchState: TSearchState = {
  params: {
    type: INITIAL_SEARCH_TYPE,
    query: ''
  },
  run: false
};

const reducerSearch = (state: TSearchState = initialSearchState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.RESET_SEARCH: {
      return initialSearchState;
    }
    case ActionTypes.SET_SEARCH_PARAMS: {
      state.params = action.payload;
      return {...state};
    }
    case ActionTypes.SET_SEARCH_RUN_FLAG: {
      state.run = action.payload;
      return {...state};
    }
    default:
      return {...state};
  }
};

export default reducerSearch;
