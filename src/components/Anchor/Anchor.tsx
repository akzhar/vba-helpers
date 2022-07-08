import React from 'react';
import { Link } from 'react-router-dom';

type TAnchor = {
  url: string
};

const Anchor: React.FC<TAnchor> = ({ url }) => (
  <Link className="anchor" to={url}>
    <svg width="20" height="20">
      <use xlinkHref="#chain" />
    </svg>
  </Link>
);

export default Anchor;
