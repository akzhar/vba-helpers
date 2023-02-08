import React from 'react';
import { Helmet } from 'react-helmet';

import SearchHelperGuide from '@components/SearchHelperGuide';

const SearchHelperPage: React.FC = () => (
  <>
    <Helmet>
      <meta
        name="description"
        content="Search helper"
      />
      <meta name="keywords" content="search, vba, helper, utility, function, procedure, macros, script, excel"/>
      <title>Search helper · VBA helpers</title>
    </Helmet>
    <h1 className="visually-hidden">Search helper</h1>
    <SearchHelperGuide />
  </>
);

export default SearchHelperPage;


