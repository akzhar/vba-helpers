import React from 'react';

import Header from '@components/Header';
import { ContactLinks } from '@consts/const';

import IssuesLink from './IssuesLink';
import TelegramLink from './TelegramLink';

const Contacts: React.FC = () => (
  <section className="contacts">
    <Header id="contacts" text="Контакты" />
    <p>
      Баги и замечания приветствуются на <IssuesLink />.<br/>
      По остальным вопросам доступен в Telegram <TelegramLink />
    </p>
    <ul>
      <li>
        <a href={ContactLinks.GITHUB} target="_blank" rel="noreferrer" title="Open repository">
          <svg width="35" height="35">
            <use xlinkHref="#github" />
          </svg>
        </a>
      </li>
      <li>
        <a href={ContactLinks.TELEGRAM} target="_blank" rel="noreferrer" title="Write to @akzhario">
          <svg width="35" height="35">
            <use xlinkHref="#telegram" />
          </svg>
        </a>
      </li>
    </ul>
  </section>
);

export default Contacts;
