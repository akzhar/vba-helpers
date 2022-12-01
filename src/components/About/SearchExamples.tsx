import React from 'react';
import { Link } from 'react-router-dom';


export const SearchExample1: React.FC = () => (
  <Link to="/search?type=n&query=getlastrow">get the last row on a sheet</Link>
);

export const SearchExample2: React.FC = () => (
  <Link to="/search?type=n&query=createws">create a new worksheet</Link>
);

export const SearchExample3: React.FC = () => (
  <Link to="/search?type=n&query=setbackcolor">set cell&apos;s background color</Link>
);
