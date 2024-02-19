import React from 'react';
import { Link } from 'react-router-dom';

import Header from '@components/Header';
import { AppRoutes } from '@consts/const';

const GettingStarted: React.FC = () => (
  <section>
  <Header id="getting-started" text="Getting started" icon="🚀" />
    <p>
      There are a few distinct search methods available for you:
      you can use <Link to={`${AppRoutes.SEARCH}?type=k`}>the search page on the site</Link> or
      you can <Link to={AppRoutes.SEARCH_FROM_XLSX}>search and import helpers right from Excel</Link>.
      If you not sure where to start consider use <Link to={AppRoutes.CATEGORIES}>categories</Link> which were designed
      to help you on a particular scope of tasks.
    </p>
  </section>
);

export default GettingStarted;
