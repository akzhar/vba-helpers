import React from 'react';

import HelperItem from '@components/HelperItem';

const HelperList: React.FC = () => (
  <ul className="helpers">
    <li className="helpers__item"><HelperItem /></li>
    <li className="helpers__item"><HelperItem /></li>
  </ul>
);

export default HelperList;
