import React from 'react';
import { Helmet } from 'react-helmet';

import Categories from '@components/Categories';

const CategoriesPage: React.FC = () => (
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
);

export default CategoriesPage;


