export type TAction = {
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
};

export enum ActionTypes {
  // message
  RESET_MESSAGE = 'reset message',
  SET_WARNING_MESSAGE = 'set warning message',
  SET_INFO_MESSAGE = 'set info message',
  SHOW_MESSAGE = 'show message',
  HIDE_MESSAGE = 'hide message',
  // search
  RESET_SEARCH = 'reset search',
  SET_SEARCH_TYPE = 'set search type',
  SET_SEARCH_QUERY = 'set search query'
}

interface ISetMessage {
  label: string,
  text?: string
}

interface ISetSearchType {
  type: string
}

interface ISetSearchQuery {
  query: string
}

const ActionCreator = {
  setInfoMessage: ({ label, text }: ISetMessage) => {
    return (dispatch: (action: TAction) => void) => {
      dispatch({ type: ActionTypes.SET_INFO_MESSAGE, payload: { label, text } });
      dispatch({ type: ActionTypes.SHOW_MESSAGE});
      setTimeout(() => {
        dispatch({ type: ActionTypes.RESET_MESSAGE});
      }, 1500);
    }
  },
  setWarningMessage: ({ label, text }: ISetMessage) => {
    return (dispatch: (action: TAction) => void) => {
      dispatch({ type: ActionTypes.SET_WARNING_MESSAGE, payload: { label, text } });
      dispatch({ type: ActionTypes.SHOW_MESSAGE});
      setTimeout(() => {
        dispatch({ type: ActionTypes.RESET_MESSAGE});
      }, 1500);
    }
  },
  setSearchType: ({ type }: ISetSearchType) => {
    return { type: ActionTypes.SET_SEARCH_TYPE, payload: type }
  },
  setSearchQuery: ({ query }: ISetSearchQuery) => {
    return { type: ActionTypes.SET_SEARCH_QUERY, payload: query }
  }
};

export default ActionCreator;
