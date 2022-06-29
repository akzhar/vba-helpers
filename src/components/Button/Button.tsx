import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type TButtonProps = {
  title: string,
  clickHandler?: () => void,
  url?: string
};

const Button: React.FC<TButtonProps> = ({title, clickHandler, url}) => {

  const { pathname } = useLocation();

  const isActive = Boolean(pathname === url)

  return (
    <>
      {
        url ?
        <Link
          to={url}
          className={`button ${isActive ? 'button--active' : ''}`}
          tabIndex={isActive ? -1 : 0}
          aria-current={isActive}
        >
          {title}
        </Link>
        :
        <button type="button" className="button" onClick={clickHandler}>{title}</button>
      }
    </>
  );
};

export default Button;
