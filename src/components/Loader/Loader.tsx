import React from 'react';

import loaderPath from '@assets/img/loader.svg';

type TLoaderProps = {
  size?: number
};

const Loader: React.FC<TLoaderProps> = ({ size = 52 }) => (
  <div className="loader">
    <img src={loaderPath} alt="Loading..." width={size} height={size} />
  </div>
);

export default Loader;
