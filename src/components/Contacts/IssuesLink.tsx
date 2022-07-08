import React from 'react';

import { ContactLinks } from '@consts/const';

const IssuesLink: React.FC = () => (
  <a href={`${ContactLinks.GITHUB}/issues`} target="_blank" rel="noreferrer" title="Open issues">GitHub Issues</a>
);

export default IssuesLink;
