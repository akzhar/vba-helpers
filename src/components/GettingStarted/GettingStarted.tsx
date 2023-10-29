import React from 'react';
import { Link } from 'react-router-dom';

import Header from '@components/Header';
import { AppRoutes } from '@consts/const';

const GettingStarted: React.FC = () => (
  <section>
  <Header id="getting-started" text="Getting started" icon="🚀" />
    <p>
      There are a few distinct search methods available for you:
      the <Link to={`${AppRoutes.SEARCH}?type=k`}>search field</Link> on site
      or you can search and import helpers <Link to={AppRoutes.SEARCH_FROM_XLSX}>right from Excel</Link>.
      Yet another way is <Link to={AppRoutes.CATEGORIES}>categories</Link> which were designed
      to help you on a particular scope of tasks.
    </p>
  </section>
);

export default GettingStarted;
