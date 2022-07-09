/* eslint-disable max-len */
import React from 'react';
import { THelper } from '@services/Api';

import Anchor from '@components/Anchor';
import { AppRoutes, HelperLinks } from '@consts/const';

const HelperItem: React.FC<THelper> = (helper: THelper) => (
  <details className="helper">
    <summary>
      <span>{helper.name}</span> <span>{`[ ${helper.category.map(c => c.toLowerCase()).join(', ')} ]`}</span>
      {/* TODO: direct link to the helper by id */}
      <Anchor url={`${AppRoutes.SEARCH}?id=${helper.id}`} aria-label="Link to the helper"/>
    </summary>
    <div className="helper__details">
      <p className="helper__details-column">
        <a href={`${HelperLinks.VIEW}/${helper.file}`} target="_blank" rel="noreferrer">View <span role="img" aria-label="eyes">👀</span></a>
        <a href={`${HelperLinks.RAW}/${helper.file}`} target="_blank" rel="noreferrer">Get raw .bas file <span role="img" aria-label="script">📜</span></a>
      </p>
      <p className="helper__details-column">
        {helper.title}
      </p>
      <p className="helper__details-column">
        {helper.usage}
      </p>
    </div>
  </details>
);

export default HelperItem;
