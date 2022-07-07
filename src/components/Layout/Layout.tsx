import React from 'react';
import { Outlet } from 'react-router-dom';

import SvgSprite from '@components/SvgSprite';
import Message from '@components/Message';
import Logo from '@components/Logo';
import Navigation from '@components/Navigation';

const Layout: React.FC = () => (
  <div className="layout">
    <SvgSprite />
    <Message />
    <Logo />
    <Navigation />
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
