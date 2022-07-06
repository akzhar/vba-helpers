import React from 'react';

import Logo from '@components/Logo';
import Navigation from '@components/Navigation';
import Categories from '@components/Categories';

const CategoriesPage: React.FC = () => (
  <>
    <h1 className="visually-hidden">Categories</h1>
    <Logo />
    <Navigation />
    <Categories />
  </>
);

export default CategoriesPage;


