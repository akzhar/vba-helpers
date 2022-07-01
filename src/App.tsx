import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Layout from '@components/Layout';
import CategoriesPage from '@pages/CategoriesPage';
import SearchPage from '@pages/SearchPage';
import AboutPage from '@pages/AboutPage';
import NotFoundPage from '@pages/NotFoundPage';
import { AppRoutes } from '@consts/const';

const App: React.FC = () => (
  <Routes>
    <Route path={AppRoutes.CATEGORIES} element={<Layout />}>
      <Route index element={<CategoriesPage />} />
      <Route path={AppRoutes.SEARCH} element={<SearchPage />} />
      <Route path={AppRoutes.ABOUT} element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage/>} />
    </Route>
  </Routes>
);

export default App;
