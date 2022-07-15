import React from 'react';
import { Helmet } from 'react-helmet';

import About from '@components/About';
import SearchMethods from '@components/SearchMethods';
import Contacts from '@components/Contacts';

const HomePage: React.FC = () => (
  <>
    <Helmet>
      <meta name="description" content="VBA helpers - коллекция функций / процедур (хелперов) для написания макросов"/>
      <meta name="keywords" content="VBA, helper, Excel, macros, script, collection, function, procedure"/>
      <title>home - vba helpers</title>
    </Helmet>
    <h1 className="visually-hidden">Домашняя страница</h1>
    <div className="home">
      <div className="home__column">
        <About/>
      </div>
      <div className="home__column">
        <SearchMethods />
        <Contacts />
      </div>
    </div>
  </>
);

export default HomePage;


