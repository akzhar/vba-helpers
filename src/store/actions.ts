import Api, { THelper, TCategory } from '@services/Api';
import getPlural from '@utils/getPlural';

import { TState } from '@store/reducer';

export type TAction = {
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
};

export enum ActionTypes {
  // message
  SET_WARNING_MESSAGE = 'set warn message',
  SET_INFO_MESSAGE = 'set info message',
  SHOW_MESSAGE = 'show message',
  RESET_MESSAGE = 'reset message',
  // search
  SET_SEARCH_PARAMS = 'set search params',
  // categories
  SET_CATEGORIES_LOADING = 'set categories is loading',
  SET_CATEGORIES_ITEMS = 'set categories',
  RESET_CATEGORIES_ITEMS = 'remove categories',
  // helpers
  SET_HELPERS_LOADING = 'set helpers is loading',
  SET_HELPERS_ITEMS = 'set helpers',
  RESET_HELPERS_ITEMS = 'remove helpers'
}

interface ISetMessage {
  label: string,
  text?: string
}

interface ISetSearchParams {
  type: string,
  query: string
}
interface ISetIsLoading {
  flag: boolean
}

const ActionCreator = {
  setInfoMessage: ({ label, text }: ISetMessage) => {
    return { type: ActionTypes.SET_INFO_MESSAGE, payload: { label, text } };
  },
  setWarnMessage: ({ label, text }: ISetMessage) => {
    return { type: ActionTypes.SET_WARNING_MESSAGE, payload: { label, text } };
  },
  showMessage: () => {
    return (dispatch: (action: TAction) => void, getState: () => TState) => {
      const { message: { text } } = getState();
      if(text) {
        dispatch({ type: ActionTypes.SHOW_MESSAGE});
        setTimeout(() => {
          dispatch({ type: ActionTypes.RESET_MESSAGE});
        }, 1500);
      }
    }
  },
  setSearchParams: ({ type ,query }: ISetSearchParams) => {
    return { type: ActionTypes.SET_SEARCH_PARAMS, payload: { type, query } };
  },
  setCategoriesIsLoading: ({ flag }: ISetIsLoading) => {
    return { type: ActionTypes.SET_CATEGORIES_LOADING, payload: flag };
  },
  setHelpersIsLoading: ({ flag }: ISetIsLoading) => {
    return { type: ActionTypes.SET_HELPERS_LOADING, payload: flag };
  },
  resetHelpers: () => {
    return { type: ActionTypes.RESET_HELPERS_ITEMS };
  },
  loadHelpers: () => {

    const api = new Api();

    return (dispatch: (action: TAction) => void, getState: () => TState) => {

      const { search: { params: { type, query } } } = getState();

      if(type && query) {

        dispatch(ActionCreator.setHelpersIsLoading({ flag: true }));

        let getHelpers: (query: string) => Promise<THelper[]>;

        // Select API method by search type
        switch(type) {
          case 't':
            getHelpers = api.getHelpersByTitle;
            break;
          case 'c':
            getHelpers = api.getHelpersByCategory;
            break;
          case 'k':
            getHelpers = api.getHelpersByKeyword;
            break;
          case 'n':
            getHelpers = api.getHelpersByName;
            break;
          case 'i':
            getHelpers = api.getHelpersById;
            break;
          default:
            break;
        }

        const fetchHelpers = async () => await getHelpers(query);

        fetchHelpers()
          .then((helpers: THelper[]) => {

            if(!Array.isArray(helpers)) {
              if(Object.prototype.hasOwnProperty.call(helpers, 'id')) {
                helpers = [helpers];
              } else {
                helpers = [];
              }
            }

            dispatch({ type: ActionTypes.SET_HELPERS_ITEMS, payload: helpers });

            if(helpers.length) {
              const verb = getPlural(helpers.length, 'Найден', 'Найдено', 'Найдено');
              const noun = getPlural(helpers.length, 'хелпер', 'хелпера', 'хелперов');
              dispatch(ActionCreator.setInfoMessage({ label: '😊', text: `${verb} ${helpers.length} ${noun}` }));
            } else {
              dispatch(ActionCreator.setWarnMessage({ label: '😭', text: 'Хелперы не найдены' }));
            }

          })
          .catch((err) => {
            console.error('Ошибка получения хелперов: ', err);
            dispatch(ActionCreator.setWarnMessage({ label: '😭', text: 'Ошибка получения хелперов' }));
          })
          .finally(() => {
            dispatch(ActionCreator.setHelpersIsLoading({ flag: false }));
          });

      }

    }
  },
  loadCategories: () => {

    const api = new Api();

    return (dispatch: (action: TAction) => void) => {

      dispatch(ActionCreator.setCategoriesIsLoading({ flag: true }));

      const fetchCategories = async () => await api.getCategories();

      fetchCategories()
        .then((categories: TCategory[]) => {
          dispatch({ type: ActionTypes.SET_CATEGORIES_ITEMS, payload: categories });
        })
        .catch((err) => {
          console.error('Ошибка получения категорий:', err);
          dispatch(ActionCreator.setWarnMessage({ label: '😭', text: 'Ошибка получения категорий' }));
        })
        .finally(() => {
          dispatch(ActionCreator.setCategoriesIsLoading({ flag: false }));
        });

    }
  }
};

export default ActionCreator;
