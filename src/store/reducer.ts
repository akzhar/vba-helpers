import { combineReducers } from 'redux';

import reducerMessage, { TMessageState, initialMassageState } from '@store/reducerMessage';
import reducerSearch, { TSearchState, initialSearchState } from '@store/reducerSearch';
import reducerCategories, { TCategoriesState, initialCategoriesState } from '@store/reducerCategories';
import reducerHelpers, { THelpersState, initialHelpersState } from '@store/reducerHelpers';

export type TState = {
  message: TMessageState,
  search: TSearchState,
  categories: TCategoriesState,
  helpers: THelpersState
};

export const initialState: TState = {
  message: initialMassageState,
  search: initialSearchState,
  categories: initialCategoriesState,
  helpers: initialHelpersState
};

const reducer = combineReducers({
  message: reducerMessage,
  search: reducerSearch,
  categories: reducerCategories,
  helpers: reducerHelpers
});

export default reducer;
