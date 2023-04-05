import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { AppRoutes } from '@consts/const';
import Categories from '@components/Categories';

declare const ym: (arg1: number, arg2: string, arg3: string, options?: unknown) => void;

const CategoriesPage: React.FC = () => {

  useEffect(() => { ym(93095535, 'hit', `${AppRoutes.CATEGORIES}`); }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="VBA helpers categories"
        />
        <meta name="keywords" content="category, vba, helper, utility, function, procedure, macros, script, excel"/>
        <title>Categories · VBA helpers</title>
      </Helmet>
      <h1 className="visually-hidden">VBA helpers categories</h1>
      <Categories />
    </>
  )
};

export default CategoriesPage;
