import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage: React.FC = () => (
  <>
    <Helmet>
      <meta name="description" content="VBA helpers"/>
      <meta name="keywords" content="VBA, helper, wrong address, not found"/>
      <title>wrong address - vba helpers</title>
    </Helmet>
    <h1 className="visually-hidden">Not found page</h1>
    <p style={{ textAlign: 'center'}}>Такой страницы не найдено...</p>
  </>
);

export default NotFoundPage;
