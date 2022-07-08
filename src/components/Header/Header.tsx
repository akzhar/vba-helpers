import React from 'react';
import { useLocation } from 'react-router-dom';

import Anchor from '@components/Anchor';

type THeaderProps = {
  id: string,
  text: string
};

const Header: React.FC<THeaderProps> = ({ id, text }) => {

  const { pathname } = useLocation();

  return (
    <div className="header">
      <h2 id={id}>
        {text}
        <Anchor url={`${pathname}#${id}`} aria-label="Link to the header" />
      </h2>
    </div>
  );

}

export default Header;
