import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { AppRoutes } from '@consts/const';
import SearchHelperGuide from '@components/SearchHelperGuide';

declare const ym: (arg1: number, arg2: string, arg3: string, options?: unknown) => void;

const SearchHelperPage: React.FC = () => {

  useEffect(() => { ym(93095535, 'hit', `${AppRoutes.SEARCH_FROM_XLSX}`); }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Search from Excel"
        />
        <meta name="keywords" content="search, vba, helper, utility, function, procedure, macros, script, excel"/>
        <title>Search from xlsx · VBA helpers</title>
      </Helmet>
      <h1 className="visually-hidden">Search helper</h1>
      <SearchHelperGuide />
    </>
  )
};

export default SearchHelperPage;


