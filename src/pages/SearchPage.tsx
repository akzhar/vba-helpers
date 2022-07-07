import React from 'react';

import SearchForm from '@components/SearchForm';
import HelperList from '@components/HelperList';

const SearchPage: React.FC = () => (
  <>
    <h1 className="visually-hidden">Search</h1>
    <SearchForm />
    <HelperList />
  </>
);

export default SearchPage;


