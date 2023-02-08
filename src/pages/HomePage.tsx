import React from 'react';
import { Helmet } from 'react-helmet';

import About from '@components/About';
import GettingStarted from '@components/GettingStarted';
import SearchMethods from '@components/SearchMethods';
import CategoriesPreview from '@components/CategoriesPreview';
import Contacts from '@components/Contacts';

const HomePage: React.FC = () => (
  <>
    <Helmet>
      <meta
        name="description"
        content="A code snippets collection intended to solve common Excel programming tasks"
      />
      <meta name="keywords" content="vba, helper, utility, function, procedure, macros, script, collection, excel"/>
      <title>Home · VBA helpers</title>
    </Helmet>
    <h1 className="visually-hidden">Home page</h1>
    <div className="layout__columns-wrapper">
      <div className="layout__column">
        <About/>
        <GettingStarted />
        <CategoriesPreview />
      </div>
      <div className="layout__column">
        <SearchMethods />
        <Contacts />
      </div>
    </div>
  </>
);

export default HomePage;


