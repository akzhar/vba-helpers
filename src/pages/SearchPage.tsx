import React from 'react';
import { Helmet } from 'react-helmet';

import SearchForm from '@components/SearchForm';
import Categories from '@components/Categories';
import HelperList from '@components/HelperList';

const SearchPage: React.FC = () => (
  <>
    <Helmet>
      <meta
        name="description"
        content="Search VBA helpers by title, category, keywords, name and id"
      />
      <meta name="keywords" content="search, vba, helper, utility, function, procedure, macros, script, excel"/>
      <title>Search · VBA helpers</title>
    </Helmet>
    <h1 className="visually-hidden">Search helpers</h1>
    <SearchForm />
    <HelperList />
    <Categories />
  </>
);

export default SearchPage;


