import React from 'react';

import { ReposLinks } from '@consts/const';

const CodeStorageLink: React.FC = () => (
  <a
    href={`${ReposLinks.API_REPOSITORY}/tree/main/data/code`}
    target="_blank"
    rel="noreferrer"
  >
    procedures / functions collection
  </a>
);

export default CodeStorageLink;
