import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { AppRoutes } from '@consts/const';
import About from '@components/About';
import GettingStarted from '@components/GettingStarted';
import SearchMethods from '@components/SearchMethods';
import Contacts from '@components/Contacts';

declare const ym: (arg1: number, arg2: string, arg3: string, options?: unknown) => void;

const HomePage: React.FC = () => {

  useEffect(() => { ym(93095535, 'hit', `${AppRoutes.HOME}`); }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="VBA code snippets collection intended to solve general Excel programming tasks"
        />
        <meta name="keywords" content="vba, helper, utility, function, procedure, macros, script, collection, excel"/>
        <title>Home · VBA helpers</title>
      </Helmet>
      <h1 className="visually-hidden">Home page</h1>
      <div className="layout__columns-wrapper">
        <div className="layout__column">
          <About/>
          <Contacts />
        </div>
        <div className="layout__column">
          <GettingStarted />
          <SearchMethods />
        </div>
      </div>
    </>
  )
};

export default HomePage;
