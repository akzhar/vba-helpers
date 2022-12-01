import React from 'react';

import { ReposLinks } from '@consts/const';

type TGitRepoLinkProps = {
  children: React.ReactNode,
};

const GitRepoLink: React.FC<TGitRepoLinkProps> = ({ children }) => (
  <a
    href={ReposLinks.APP_REPOSITORY}
    target="_blank"
    rel="noreferrer"
    title="Open repository"
  >
    {children}
  </a>
);

export default GitRepoLink;
