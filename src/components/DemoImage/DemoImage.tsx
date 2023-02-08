import React from 'react';

type TDemoImageProps = {
  url: string,
  width?: string
};

const DemoImage: React.FC<TDemoImageProps> = ({ url, width }) => (
  <a
    className="demo-image"
    href={url}
    target="_blank"
    rel="noreferrer"
    style={width ? {width} : {}}
  >
    <img src={url} alt="demo" />
    <svg width="18" height="18">
      <use xlinkHref="#zoom" />
    </svg>
  </a>
);

export default DemoImage;
