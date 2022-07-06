/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

const MapTypeToHint: { [key: string]: string } =  {
  KEYWORD: 'Search by keyword',
  CATEGORY: 'Search by category'
};

import ActionCreator from '@store/actions';

const SearchForm: React.FC = () => {

  const dispatch = useDispatch();

  const [searchType, setSearchType] = useState<string>(Object.keys(MapTypeToHint)[0]);
  const [searchHint, setSearchHint] = useState<string>(Object.values(MapTypeToHint)[0]);
  const [query, setQuery] = useState<string>('');

  const selectRef = useRef<HTMLSelectElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const value = inputRef.current?.value;
    if(value && value === query) {
      dispatch(ActionCreator.setInfoMessage({ label: '😊', text: `Поиск по запросу <${query}>...` }));
      inputRef.current.value = '';
    }
  };

  const selectChangeHandler = (evt: React.FormEvent<HTMLSelectElement>) => {
    evt.preventDefault();
    const typeValue = selectRef.current?.value;
    if(typeValue) {
      setSearchType(typeValue);
      setSearchHint(MapTypeToHint[typeValue]);
    }
  };

  const inputChangeHandler = (evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const queryValue = inputRef.current?.value;

    if(queryValue) {
      switch(queryValue) {
        case '#':
          setSearchType('CATEGORY');
          setSearchHint(MapTypeToHint.CATEGORY);
          inputRef.current.value = '';
          break;
        case '@':
          setSearchType('KEYWORD');
          setSearchHint(MapTypeToHint.KEYWORD);
          inputRef.current.value = '';
          break;
        default:
          setQuery(queryValue);
          break;
      }
    }

  };

  return (
    <form className="search-form" onSubmit={formSubmitHandler}>
      <select className="search-form__type" value={searchType} ref={selectRef} onChange={selectChangeHandler}>
        { Object.keys(MapTypeToHint).map((type, i) => (<option key={i} value={type}>{type[0]}</option>)) }
      </select>
      <input type="text" placeholder={searchHint} ref={inputRef} onChange={inputChangeHandler}/>
      <button type="submit" className="visually-hidden" tabIndex={-1}>Search</button>
    </form>
  );
}

export default SearchForm;
