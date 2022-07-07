import React from 'react';

import About from '@components/About';
import Contacts from '@components/Contacts';

const AboutPage: React.FC = () => (
  <>
    <h1 className="visually-hidden">About</h1>
    <About />
    <Contacts />
  </>
);

export default AboutPage;


