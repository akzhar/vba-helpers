import React from 'react';

import Logo from '@components/Logo';
import Navigation from '@components/Navigation';
import SearchForm from '@components/SearchForm';

const SearchPage: React.FC = () => (
  <>
    <h1 className="visually-hidden">Search</h1>
    <Logo />
    <Navigation />
    <SearchForm />
  </>
);

export default SearchPage;


