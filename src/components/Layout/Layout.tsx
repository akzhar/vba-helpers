import React from 'react';
import { Outlet } from 'react-router-dom';

import Message from '@components/Message';

const Layout: React.FC = () => (
  <div className="layout">
    <Message/>
    <main className="layout__content">
      <Outlet/>
    </main>
  </div>
);

export default Layout;
