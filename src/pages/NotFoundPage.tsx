import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage: React.FC = () => (
  <>
    <Helmet>
      <meta
        name="description"
        content="Not found page"
      />
      <meta name="keywords" content="wrong address, not found"/>
      <title>404 · VBA helpers</title>
    </Helmet>
    <h1 className="visually-hidden">Page 404</h1>
    <p style={{ textAlign: 'center'}}>No such page was found...</p>
  </>
);

export default NotFoundPage;
