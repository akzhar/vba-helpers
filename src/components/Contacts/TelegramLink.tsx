import React from 'react';

import { ContactLinks } from '@consts/const';

type TTelegramLinkProps = {
  children: React.ReactNode,
};

const TelegramLink: React.FC<TTelegramLinkProps> = ({ children }) => (
  <a
    href={ContactLinks.TELEGRAM}
    target="_blank"
    rel="noreferrer"
    title="Write to @akzhario"
  >
    {children}
  </a>
);

export default TelegramLink;
