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
  SET_SEARCH_PARAMS = 'set search params',
  SET_SEARCH_LOADING = 'set search loading flag'
}

interface ISetMessage {
  label: string,
  text?: string
}

interface ISetSearchParams {
  type: string,
  query: string
}

interface ISetSearchIsLoading {
  flag: boolean
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
  setSearchParams: ({ type, query }: ISetSearchParams) => {
    return { type: ActionTypes.SET_SEARCH_PARAMS, payload: { type, query } };
  },
  setSearchIsLoading: ({ flag }: ISetSearchIsLoading) => {
    return { type: ActionTypes.SET_SEARCH_LOADING, payload: flag };
  }
};

export default ActionCreator;
