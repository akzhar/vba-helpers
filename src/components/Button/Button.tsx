import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type TButtonProps = {
  children: React.ReactNode,
  clickHandler?: () => void,
  url?: string,
  active?: boolean
};

const Button: React.FC<TButtonProps> = ({ children, clickHandler, url, active = false }) => {

  const { pathname } = useLocation();

  const isUrl = Boolean(url);
  const isActive = isUrl ? Boolean(pathname === url) : active

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
          {children}
        </Link>
        :
        <button
          type="button"
          className={`button ${isActive ? 'button--active' : ''}`}
          tabIndex={isActive ? -1 : 0}
          onClick={clickHandler}
        >
          {children}
        </button>
      }
    </>
  );
}

export default Button;
