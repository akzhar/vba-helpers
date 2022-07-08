import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AppRoutes } from '@consts/const';

const Logo: React.FC = () => {

  const { pathname } = useLocation();
  const enableLink = Boolean(pathname !== AppRoutes.HOME)

  return (
    <Link
      to={AppRoutes.HOME}
      className={`logo ${enableLink ? 'logo--link' : ''}`}
      tabIndex={enableLink ? 0 : -1}
    >
      VBA helpers
    </Link>
  );
}

export default Logo;
