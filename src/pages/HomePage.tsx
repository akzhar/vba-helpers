import React from 'react';
import { Helmet } from 'react-helmet';

import About from '@components/About';
import SearchMethods from '@components/SearchMethods';
import Contacts from '@components/Contacts';

const HomePage: React.FC = () => (
  <>
    <Helmet>
      <meta
        name="description"
        content="A free collection of small VBA code pieces intended to help solving common Excel programming cases"
      />
      <meta name="keywords" content="vba, helper, utility, function, procedure, macros, script, collection, excel"/>
      <title>Home · VBA helpers</title>
    </Helmet>
    <h1 className="visually-hidden">Home page</h1>
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


