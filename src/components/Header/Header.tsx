import React from 'react';
import { useLocation } from 'react-router-dom';

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
        <a href={`${pathname}#${id}`}>
          <svg width="20" height="20">
            <use xlinkHref="#chain" />
          </svg>
        </a>
      </h2>
    </div>
  );

}

export default Header;
