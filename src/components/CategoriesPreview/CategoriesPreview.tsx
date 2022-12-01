import React from 'react';
import { Link } from 'react-router-dom';

import Header from '@components/Header';
import { AppRoutes } from '@consts/const';

const CategoriesPreview: React.FC = () => (
  <section>
    <Header id="categories" text="Categories" />
    <p>
      All the helpers are divided into <Link to={AppRoutes.CATEGORIES}>categories</Link>.<br/>
      Each category designed to help you on particular scope.
    </p>
  </section>
);

export default CategoriesPreview;
