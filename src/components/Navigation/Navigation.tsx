import React from 'react';
import capitalize from '@utils/capitalize';

import Button from '@components/Button';
import { AppRoutes } from '@consts/const';

const Navigation: React.FC = () => (
  <nav className="navigation">
    {
      Object.entries(AppRoutes).map((route, index) => {
        const [routeTitle, routeUrl] = route;
        return <Button key={index} url={routeUrl}>{capitalize(routeTitle)}</Button>
      })
    }
  </nav>
);

export default Navigation;
