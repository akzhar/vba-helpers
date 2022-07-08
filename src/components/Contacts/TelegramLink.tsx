import React from 'react';

import { ContactLinks } from '@consts/const';

const TelegramLink: React.FC = () => (
  <a href={ContactLinks.TELEGRAM} target="_blank" rel="noreferrer" title="Write to @akzhario">@akzhario</a>
);

export default TelegramLink;
