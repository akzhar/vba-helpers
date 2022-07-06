import React from 'react';

import loaderPath from '@assets/img/loader.svg';

type ILoaderProps = {
  size?: number
};

const Loader: React.FC<ILoaderProps> = ({ size = 52 }) => (
  <div className="loader" style={{width: '100%'}}>
    <img src={loaderPath} alt="Loading..." width={size} height={size} style={{width: '0 auto'}} />
  </div>
);

export default Loader;
