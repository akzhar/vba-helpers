/* eslint-disable jsx-a11y/no-onchange */
import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useLocation } from 'react-router-dom';
import debounce from '@utils/debounce';
import capitalize from '@utils/capitalize';

import Button from '@components/Button';
import ActionCreator from '@store/actions';
import { TState } from '@store/reducer';

export const SearchTypeToHint: { [key: string]: string } =  {
  t: 'искать по заголовку хелпера',
  c: 'искать по категории хелпера',
  k: 'искать по ключевой фразе',
  n: 'искать по имени хелпера',
  i: 'искать по ID хелпера'
};

export const INITIAL_SEARCH_TYPE = 'k';

const SymbolToSearchType: { [key: string]: string } =  {
  '!': 't',
  '@': 'c',
  '#': 'k',
  // eslint-disable-next-line quote-props
  '$': 'n'
};

const searchTypes = Object.keys(SearchTypeToHint);
const symbols = Object.keys(SymbolToSearchType);

const SearchForm: React.FC = () => {

  const [searchParams] = useSearchParams();
  const {search} = useLocation();
  const paramType = searchParams.get('type');
  const paramQuery = searchParams.get('query');
  const { type: storeType, query: storeQuery } = useSelector((state: TState) => state.search.params);

  const getValues = () => {
    const type = selectRef.current?.value;
    const query = inputRef.current?.value;
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
    replaceURL({ type, query});
    // Run search only if URL params comes from the URL (paste link)
    if(paramType && paramQuery) {
      runSearch();
    }
  }

  useEffect(initialize, [search]);

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

  function runSearch() {
    const [type, query] = getValues();
    if(type && query) {
      dispatch(ActionCreator.setSearchParams({ type, query }));
      dispatch(ActionCreator.setSearchIsLoading({ flag: true }));
    }
  }

  const formSubmitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    runSearch();
  };

  const typeChangeHandler = (type?: string) => {
    if(selectRef.current && inputRef.current) {
      if(type) {
        selectRef.current.value = type;
      } else {
        type = getValues()[0];
      }
      if(type) {
        inputRef.current.placeholder = capitalize(SearchTypeToHint[type]);
        inputRef.current.value = '';
        inputRef.current.focus();
        replaceURL({ type });
      }
    }
  };

  const selectChangeHandler = (evt: React.FormEvent<HTMLSelectElement>) => {
    evt.preventDefault();
    typeChangeHandler();
  };

  const inputChangeHandler = (evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const [, query] = getValues();
    if(query) {
      let newType = '';
      switch(query) {
        case '!':
          newType = SymbolToSearchType['!']; // search by title
          break;
        case '@':
          newType = SymbolToSearchType['@']; // search by category
          break;
        case '#':
          newType = SymbolToSearchType['#']; // search by keyword
          break;
        case '$':
          newType = SymbolToSearchType['$']; // search by name
          break;
        default:
          replaceURL({ query });
          break;
      }
      if(newType) {
        replaceURL({ type: newType });
        if(selectRef.current && inputRef.current) {
          selectRef.current.value = newType;
          inputRef.current.value = '';
        }
      }
    } else {
      replaceURL({ query: ''});
    }
  };

  const dbInputChangeHandler = useCallback(debounce(inputChangeHandler), []);

  return (
    <form className="search" onSubmit={formSubmitHandler}>
      <fieldset className="search__input">
        <select
          className="search__type"
          name="type"
          title="Search type"
          ref={selectRef}
          onChange={selectChangeHandler}
        >
          { searchTypes.map((type, i) => (<option key={i} value={type}>{type.toUpperCase()}</option>)) }
        </select>
        <input
          className="search__query"
          name="query"
          type="text"
          ref={inputRef}
          onChange={dbInputChangeHandler}
        />
      </fieldset>
      <ul className="search__hints">
        {symbols.map((symbol: string) => {
          const type = SymbolToSearchType[symbol];
          const hint = SearchTypeToHint[type];
          return (
          <li key={symbol}>
            <Button clickHandler={() => typeChangeHandler(type)}>
              <b>{symbol}</b> - {hint}
            </Button>
          </li>
        )})}
        <li><button type="submit" className="button"><b>Enter</b> - искать</button></li>
      </ul>
    </form>
  );
}

export default SearchForm;
