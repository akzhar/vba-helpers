import { combineReducers } from 'redux';

import reducerMessage, { TMessageState, initialMassageState } from '@store/reducerMessage';
import reducerSearch, { TSearchState, initialSearchState } from '@store/reducerSearch';

export type TState = {
  message: TMessageState,
  search: TSearchState
};

export const initialState: TState = {
  message: initialMassageState,
  search: initialSearchState
};

const reducer = combineReducers({
  message: reducerMessage,
  search: reducerSearch
});

export default reducer;
