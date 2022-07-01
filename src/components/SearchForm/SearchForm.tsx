import React, { useRef } from 'react';
// import { useDispatch } from 'react-redux';

// import ActionCreator from '@store/actions';

const SearchForm: React.FC = () => {

  // const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const inputHasValue = Boolean(inputRef.current?.value);
    if(inputRef.current && inputHasValue) {
      // dispatch(ActionCreator.setInfoMessage({ label: '😊', text: '' }));
      inputRef.current.value = '';
    }
  };

  return (
    <form className="search-form" onSubmit={formSubmitHandler}>
      <input type="text" placeholder="What you are searching for?" ref={inputRef} />
      <button type="submit" className="visually-hidden" tabIndex={-1}>Search</button>
    </form>
  );
}

export default SearchForm;
