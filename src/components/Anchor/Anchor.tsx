import React from 'react';
import { Link } from 'react-router-dom';

type TAnchor = {
  url: string,
  title?: string
};

const Anchor: React.FC<TAnchor> = ({ url, title='' }) => (
  <Link className="anchor" to={url} title={title}>
    <svg width="18" height="18">
      <use xlinkHref="#chain" />
    </svg>
  </Link>
);

export default Anchor;
