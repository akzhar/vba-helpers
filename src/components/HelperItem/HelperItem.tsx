import React from 'react';

import Anchor from '@components/Anchor';
// import { AppRoutes } from '@consts/const';

const HELPER_VIEW_URL = 'https://github.com/akzhar/vba-helpers-api/blob/main/data/code/64.bas';
const HELPER_CODE_URL = 'https://github.com/akzhar/vba-helpers-api/raw/main/data/code/64.bas';

const HelperItem: React.FC = () => (
  <details className="helper">
    <summary>
      <span>Helper category + name + title</span>
      {/* TODO: direct link to the helper by id `${AppRoutes.SEARCH}?id=${123}` */}
      <Anchor url={'/123'} aria-label="Link to the helper"/>
    </summary>
    <div className="helper__details">
      <p className="helper__details-column">
        <a href={HELPER_VIEW_URL} target="_blank" rel="noreferrer">View <span role="img" aria-label="eyes">👀</span></a>
        <a href={HELPER_CODE_URL}>Get raw .bas file <span role="img" aria-label="script">📜</span></a>
      </p>
      <p className="helper__details-column">
        Description
      </p>
      <p className="helper__details-column">
        Usage
      </p>
    </div>
  </details>
);

export default HelperItem;
