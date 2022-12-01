import React from 'react';
import { Link } from 'react-router-dom';

import Header from '@components/Header';
import { AppRoutes } from '@consts/const';

import CodeStorageLink from './CodeStorageLink';

const GettingStarted: React.FC = () => (
  <section>
  <Header id="getting-started" text="Getting started"/>
    <p>
      <Link to={AppRoutes.SEARCH}>Here</Link> you can easily search the helper that is
      suitable for your needs. Just put a few keywords, press Enter and Voila! All the
      helpers are stored in the <CodeStorageLink /> as plain text files and supplied with
      an example of usage so you can easily apply it in your project.
    </p>
  </section>
);

export default GettingStarted;
