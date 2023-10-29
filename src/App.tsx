import React from 'react';
import {Routes, Route} from 'react-router-dom';

import HomePage from '@pages/HomePage';
import Layout from '@components/Layout';
import SearchPage from '@pages/SearchPage';
import CategoriesPage from '@pages/CategoriesPage';
import SearchHelperPage from '@pages/SearchHelperPage';
import NotFoundPage from '@pages/NotFoundPage';
import { AppRoutes } from '@consts/const';

const App: React.FC = () => (
  <Routes>
    <Route path={AppRoutes.HOME} element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path={AppRoutes.SEARCH} element={<SearchPage />} />
      <Route path={AppRoutes.CATEGORIES} element={<CategoriesPage />} />
      <Route path={AppRoutes.SEARCH_FROM_XLSX} element={<SearchHelperPage />} />
      <Route path="*" element={<NotFoundPage/>} />
    </Route>
  </Routes>
);

export default App;
