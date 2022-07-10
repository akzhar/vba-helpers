import React from 'react';

import About from '@components/About';
import SearchMethods from '@components/SearchMethods';
import Contacts from '@components/Contacts';

const HomePage: React.FC = () => (
  <>
    <h1 className="visually-hidden">About</h1>
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


