/* eslint-disable jsx-a11y/no-onchange */
import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams, useLocation } from 'react-router-dom';
import debounce from '@utils/debounce';
import capitalize from '@utils/capitalize';

import Button from '@components/Button';
import ActionCreator from '@store/actions';

export const SearchTypeToHint: { [key: string]: string } =  {
  t: 'искать по заголовку хелпера',
  c: 'искать по категории хелпера',
  k: 'искать по ключевой фразе',
  n: 'искать по имени хелпера'
};

const INITIAL_SEARCH_TYPE = 'k';

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

  // replace URL params to allow copy link
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

  // on every URL params update use params comes from URL
  const initialize = () => {
    const type = paramType ? paramType: INITIAL_SEARCH_TYPE;
    const query = paramQuery ? paramQuery : '';
    const hint = paramType ? SearchTypeToHint[paramType] : SearchTypeToHint[INITIAL_SEARCH_TYPE];
    if(selectRef.current && inputRef.current) {
      selectRef.current.value = type;
      inputRef.current.value = query;
      inputRef.current.placeholder = capitalize(hint);
    }
    inputRef.current?.focus();
    replaceURL({ type, query});
    if(paramType && paramQuery) {
      runSearch();
    }
  }

  useEffect(initialize, [search]);

  const dispatch = useDispatch();
  const selectRef = useRef<HTMLSelectElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function runSearch() {
    dispatch(ActionCreator.setInfoMessage({ label: '😊', text: `Поиск по запросу <${inputRef.current?.value}>...` }));
    // TODO: save searchQuery to store
  }

  const formSubmitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const query = inputRef.current?.value;
    if(query) {
      runSearch();
    }
  };

  const typeChangeHandler = (type?: string) => {
    if(selectRef.current && inputRef.current) {
      if(type) {
        selectRef.current.value = type;
      } else {
        type = selectRef.current.value;
      }
      inputRef.current.placeholder = capitalize(SearchTypeToHint[type]);
      inputRef.current.focus();
      replaceURL({ type });
    }
  };

  const selectChangeHandler = (evt: React.FormEvent<HTMLSelectElement>) => {
    evt.preventDefault();
    typeChangeHandler();
  };

  const inputChangeHandler = (evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const query = inputRef.current?.value;
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
