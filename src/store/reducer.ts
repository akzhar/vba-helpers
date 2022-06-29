import { combineReducers } from 'redux';

import reducerMessage, { TMessageState, initialMassageState } from '@store/reducerMessage';

export type TState = {
  message: TMessageState
};

export const initialState: TState = {
  message: initialMassageState
};

const reducer = combineReducers({
  message: reducerMessage
});

export default reducer;
