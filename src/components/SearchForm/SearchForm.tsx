/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

const SearchTypeToHint: { [key: string]: string } =  {
  k: 'Search by keyword',
  c: 'Search by category'
};

import ActionCreator from '@store/actions';

const SearchForm: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [searchType, setSearchType] = useState<string>(Object.keys(SearchTypeToHint)[0]);
  const [searchHint, setSearchHint] = useState<string>(Object.values(SearchTypeToHint)[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const typeRef = useRef<HTMLSelectElement>(null);
  const queryRef = useRef<HTMLInputElement>(null);

  function runSearch() {
    dispatch(ActionCreator.setInfoMessage({ label: '😊', text: `Поиск по запросу <${searchQuery}>...` }));
    // TODO: save searchQuery to store
  }

  const formSubmitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(searchQuery) {
      runSearch();
    }
  };

  const typeChangeHandler = (evt: React.FormEvent<HTMLSelectElement>) => {
    evt.preventDefault();
    const typeValue = typeRef.current?.value;
    if(typeValue) {
      setSearchType(typeValue);
      queryRef.current?.focus();
    }
  };

  const queryChangeHandler = (evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const queryValue = queryRef.current?.value;
    if(queryValue) {
      switch(queryValue) {
        case '@':
          setSearchType('c');
          setSearchQuery('');
          break;
        case '#':
          setSearchType('k');
          setSearchQuery('');
          break;
        default:
          setSearchQuery(queryValue);
          break;
      }
    } else {
      setSearchQuery('');
    }
  };

  useEffect(() => {
    const type = searchParams.get('type');
    const query = searchParams.get('query');
    if(type) {
      setSearchType(type);
    }
    if(query) {
      setSearchQuery(query);
      runSearch();
    }
    queryRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      navigate(`?type=${searchType}`);
    } else {
      navigate(`?type=${searchType}&query=${searchQuery}`);
    }
    setSearchHint(SearchTypeToHint[searchType]);
  }, [searchType, searchQuery]);

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
        { Object.keys(SearchTypeToHint).map((type, i) => (<option key={i} value={type}>{type.toUpperCase()}</option>)) }
      </select>
      <input
        className="search__query"
        name="query"
        type="text"
        placeholder={searchHint}
        value={searchQuery}
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
