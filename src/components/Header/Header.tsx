import React from 'react';
import { useLocation } from 'react-router-dom';

import Anchor from '@components/Anchor';

type THeaderProps = {
  text: string,
  id?: string,
  icon?: string,
  align?: string
};

const Header: React.FC<THeaderProps> = ({ id, text, icon, align = 'center' }) => {

  const { pathname } = useLocation();

  return (
    <div className="header" style={ { justifyContent: align } }>
      <div className="header__wrapper">
        <h2 {...(id ? {id} : {})}>{text}</h2>
        {id ? <Anchor url={`${pathname}#${id}`} title={`Link to #${id}`} /> : <></>}
        {icon ? <span className="header__icon" role="img" aria-label="icon">{icon}</span> : ''}
      </div>
    </div>
  );

}

export default Header;
