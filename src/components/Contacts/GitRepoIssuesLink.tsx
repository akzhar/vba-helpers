import React from 'react';

import { ReposLinks } from '@consts/const';

type TGitRepoIssuesLinkProps = {
  children: React.ReactNode,
};

const GitRepoIssuesLink: React.FC<TGitRepoIssuesLinkProps> = ({ children }) => (
  <a
    href={`${ReposLinks.APP_REPOSITORY}/issues`}
    target="_blank"
    rel="noreferrer"
    title="Open issues"
  >
    {children}
  </a>
);

export default GitRepoIssuesLink;
