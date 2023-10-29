import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoutes } from '@consts/const';

export const SearchExample1: React.FC = () => (
  <Link to={`${AppRoutes.SEARCH}?type=n&query=getlastrow`}>find the last row</Link>
);

export const SearchExample2: React.FC = () => (
  <Link to={`${AppRoutes.SEARCH}?type=n&query=createws`}>create a worksheet</Link>
);

export const SearchExample3: React.FC = () => (
  <Link to={`${AppRoutes.SEARCH}?type=n&query=setbackcolor`}>color the range</Link>
);
