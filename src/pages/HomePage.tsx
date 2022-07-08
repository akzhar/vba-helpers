import React from 'react';

import About from '@components/About';
import Contacts from '@components/Contacts';

const HomePage: React.FC = () => (
  <>
    <h1 className="visually-hidden">About</h1>
    <section className="home">
      <div className="home__column">
        <About/>
      </div>
      <div className="home__column">
        <Contacts />
      </div>
    </section>
  </>
);

export default HomePage;


