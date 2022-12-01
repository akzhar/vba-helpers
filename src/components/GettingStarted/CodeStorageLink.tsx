import React from 'react';

import { ReposLinks } from '@consts/const';

const CodeStorageLink: React.FC = () => (
  <a
    href={`${ReposLinks.API_REPOSITORY}/tree/main/data`}
    target="_blank"
    rel="noreferrer"
  >
    git repository
  </a>
);

export default CodeStorageLink;
