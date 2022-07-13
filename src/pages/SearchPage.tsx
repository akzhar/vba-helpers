import React from 'react';
import { Helmet } from 'react-helmet';

import SearchForm from '@components/SearchForm';
import Categories from '@components/Categories';
import HelperList from '@components/HelperList';

const SearchPage: React.FC = () => (
  <>
    <Helmet>
      <meta name="description" content="VBA helpers - поиск хелперов для написания макросов"/>
      <meta name="keywords" content="VBA, helper, Excel, macros, script, search"/>
      <title>search - vba helpers</title>
    </Helmet>
    <h1 className="visually-hidden">Search</h1>
    <SearchForm />
    <HelperList />
    <Categories />
  </>
);

export default SearchPage;


