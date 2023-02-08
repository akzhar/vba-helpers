import React from 'react';
import { Link } from 'react-router-dom';

import Header from '@components/Header';
import { AppRoutes } from '@consts/const';

const CategoriesPreview: React.FC = () => (
  <section>
    <Header id="categories" text="Categories" icon="🗃️" />
    <p>
      All the helpers are divided into a few <Link to={AppRoutes.CATEGORIES}>categories</Link>.<br/>
      Each category is designed to help you on a particular scope of tasks.
    </p>
  </section>
);

export default CategoriesPreview;
