import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type IHeaderProps = {
  id: string,
  text: string
};

const Header: React.FC<IHeaderProps> = ({ id, text }) => {

  const { pathname } = useLocation();

  return (
    <div className="header">
      <h2 id={id}>
        {text}
        <Link to={`${pathname}#${id}`}>
          <svg width="20" height="20">
            <use xlinkHref="#chain" />
          </svg>
        </Link>
      </h2>
    </div>
  );

}

export default Header;
