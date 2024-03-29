/* eslint-disable jsx-a11y/no-onchange */
import React, { useRef, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import debounce from '@utils/debounce';
import throttle from '@utils/throttle';
import capitalize from '@utils/capitalize';

import { AppRoutes } from '@consts/const';
import Button from '@components/Button';
import ActionCreator from '@store/actions';
import { TState } from '@store/reducer';

export const SearchTypeToField: { [key: string]: string } =  {
  t: 'title',
  c: 'category',
  k: 'keywords',
  n: 'name',
  i: 'id'
};

export const SearchTypeToHint: { [key: string]: string } =  {
  t: `search by ${SearchTypeToField['t']}`,
  c: `search by ${SearchTypeToField['c']}`,
  k: `search by ${SearchTypeToField['k']}`,
  n: `search by ${SearchTypeToField['n']}`,
  i: `search by ${SearchTypeToField['i']}`
};

export const INITIAL_SEARCH_TYPE = 'k';

const SymbolToSearchType: { [key: string]: string } =  {
  '!': 't',
  '@': 'c',
  '#': 'k',
  // eslint-disable-next-line quote-props
  '$': 'n',
  '%': 'i'
};

const searchTypes = Object.keys(SearchTypeToHint);
const symbols = Object.keys(SymbolToSearchType);

declare const ym: (arg1: number, arg2: string, arg3: string, options?: unknown) => void;

const SearchForm: React.FC = () => {

  const location = useLocation();

  useEffect(() => { ym(93095535, 'hit', `${AppRoutes.SEARCH}${location.search}`); }, [location]);

  const [searchParams] = useSearchParams();
  const paramType = searchParams.get('type');
  const paramQuery = searchParams.get('query');

  const { type: storeType, query: storeQuery } = useSelector((state: TState) => state.search.params);

  const getValues = () => {
    const type = selectRef.current?.value || '';
    const query = inputRef.current?.value || '';
    return [type, query];
  }

  // On every URL params update component will use params comes
  // - either from the URL (paste link)
  // - or from the store
  const initialize = () => {
    const stateType = paramType ? paramType: (storeType ? storeType : null);
    const stateQuery = paramQuery ? paramQuery : (storeQuery ? storeQuery : null);
    const stateHint = paramType ? SearchTypeToHint[paramType] : (storeType ? SearchTypeToHint[storeType] : null);
    const type = stateType ? stateType : INITIAL_SEARCH_TYPE;
    const query = stateQuery ? stateQuery : '';
    const hint = stateHint ? stateHint : SearchTypeToHint[INITIAL_SEARCH_TYPE];
    if(selectRef.current && inputRef.current) {
      selectRef.current.value = type;
      inputRef.current.value = query;
      inputRef.current.placeholder = capitalize(hint);
    }
    updateSearchParams(type, query);
    replaceURL({ type, query});
    // Run search only if URL params comes from the URL (paste link)
    if(paramType && paramQuery) {
      runSearch();
    }
    return () => {
      dispatch(ActionCreator.resetHelpers());
    }
  }

  useEffect(initialize, [location]);

  // Replace URL params without push to history to allow copy link to search results
  const replaceURL = ({ type, query }: {[key: string]: string}) => {
    const newUrl = new URL(window.location.href);
    if(type) newUrl.searchParams.set('type', type);
    if(query) {
      newUrl.searchParams.set('query', query);
    } else {
      newUrl.searchParams.delete('query');
    }
    window.history.replaceState(null, '', newUrl);
  };

  const dispatch = useDispatch();
  const selectRef = useRef<HTMLSelectElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateSearchParams = (type: string, query: string) => {
    dispatch(ActionCreator.setSearchParams({ type, query }));
  };

  const runSearch = () => {
    const [type, query] = getValues();
    if(type && query) {
      updateSearchParams(type, query);
      dispatch(ActionCreator.loadHelpers());
    }
  };

  const typeChangeHandler = (type?: string) => {
    if(!type) {
      type = getValues()[0];
    }
    if(type && selectRef.current && inputRef.current) {
      const query = '';
      selectRef.current.value = type;
      inputRef.current.value = query;
      inputRef.current.placeholder = capitalize(SearchTypeToHint[type]);
      inputRef.current.focus();
      updateSearchParams(type, query);
      replaceURL({ type });
    }
  };

  const selectChangeHandler = () => typeChangeHandler();

  const formSubmitHandler = () => runSearch();

  const inputChangeHandler = () => {
    let type = '';
    const [, query] = getValues();
    if(query) {
      switch(query) {
        case symbols[0]:
          type = SymbolToSearchType[symbols[0]]; // ! - search by title
          break;
        case symbols[1]:
          type = SymbolToSearchType[symbols[1]]; // @ - search by category
          break;
        case symbols[2]:
          type = SymbolToSearchType[symbols[2]]; // # - search by keyword
          break;
        case symbols[3]:
          type = SymbolToSearchType[symbols[3]]; // $ - search by name
          break;
        case symbols[4]:
          type = SymbolToSearchType[symbols[4]]; // % - search by id
          break;
        default:
          replaceURL({ query });
          break;
      }
      if(type) {
        typeChangeHandler(type);
      }
    } else {
      replaceURL({ query: ''});
    }
  };

  const dbFormSubmitHandler = useCallback(throttle(formSubmitHandler, 2000), []);
  const dbInputChangeHandler = useCallback(debounce(inputChangeHandler, 300), []);

  return (
    <form className="search" onSubmit={
      (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        dbFormSubmitHandler();
      }
    }>
      <Helmet>
        <title>{`Search ${SearchTypeToField[storeType]} ${storeQuery.toUpperCase() || '???'} · VBA helpers`}</title>
      </Helmet>
      <fieldset className="search__input">
        <select
          data-testid="search-select"
          className="search__type"
          name="type"
          title="Search type"
          ref={selectRef}
          onChange={selectChangeHandler}
        >
          { searchTypes.map((type, i) => (<option key={i} value={type}>{type}</option>)) }
        </select>
        <input
          data-testid="search-input"
          className="search__query"
          name="query"
          type="text"
          ref={inputRef}
          onChange={dbInputChangeHandler}
        />
      </fieldset>
      <ul className="search__methods">
        {searchTypes.map((type: string) => {
          const hint = SearchTypeToHint[type];
          return (
          <li key={type}>
            <Button clickHandler={() => typeChangeHandler(type)} active={storeType === type}>
              {capitalize(hint)} ( <b>{type}</b> )
            </Button>
          </li>
        )})}
        <li>
          <button data-testid="search-submit" type="submit" className="button"><b>Enter</b> - search</button>
        </li>
      </ul>
    </form>
  );
}

export default SearchForm;
