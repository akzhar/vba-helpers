/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useRef, useEffect } from 'react';
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
  const [searchQuery, setSearchQuery] = useState<string>('');

  const typeRef = useRef<HTMLSelectElement>(null);
  const queryRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const value = queryRef.current?.value;
    if(value && value === searchQuery) {
      dispatch(ActionCreator.setInfoMessage({ label: '😊', text: `Поиск по запросу <${searchQuery}>...` }));
      // TODO: save searchQuery to store
      // TODO: update location url
      queryRef.current.value = '';
    }
  };

  const typeChangeHandler = (evt: React.FormEvent<HTMLSelectElement>) => {
    evt.preventDefault();
    const typeValue = typeRef.current?.value;
    if(typeValue) {
      setSearchType(typeValue);
      setSearchHint(MapTypeToHint[typeValue]);
      queryRef.current?.focus();
    }
  };

  const queryChangeHandler = (evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const queryValue = queryRef.current?.value;

    if(queryValue) {
      switch(queryValue) {
        case '@':
          setSearchType('CATEGORY');
          setSearchHint(MapTypeToHint.CATEGORY);
          queryRef.current.value = '';
          break;
        case '#':
          setSearchType('KEYWORD');
          setSearchHint(MapTypeToHint.KEYWORD);
          queryRef.current.value = '';
          break;
        default:
          setSearchQuery(queryValue);
          break;
      }
    }

  };

  useEffect(() => { queryRef.current?.focus(); }, []);

  return (
    <form className="search" onSubmit={formSubmitHandler}>
      <select
        className="search__type"
        name="type"
        title="Search type"
        value={searchType}
        ref={typeRef}
        onChange={typeChangeHandler}
      >
        { Object.keys(MapTypeToHint).map((type, i) => (<option key={i} value={type}>{type[0]}</option>)) }
      </select>
      <input
        className="search__query"
        name="query"
        type="text"
        placeholder={searchHint}
        ref={queryRef}
        onChange={queryChangeHandler}
      />
      <div className="search__hint">
        <span>
        Type <b>@</b> to search by category
        <br/>
        Type <b>#</b> to search by keyword
        <br/>
        Type and press <b>Enter</b>
        </span>
      </div>
      <button type="submit" className="visually-hidden" tabIndex={-1}>Search</button>
    </form>
  );
}

export default SearchForm;
