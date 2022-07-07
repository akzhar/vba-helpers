/* eslint-disable max-len */
import React from 'react';

import Header from '@components/Header';
import { ContactLinks } from '@consts/const';

const Contacts: React.FC = () => (
  <section className="contacts">
    <Header id="contacts" text="Контакты" />
    <p>Баги и замечания приветствуются на <a href={`${ContactLinks.GITHUB}/issues`} target="blank" title="Open issues">GitHub Issues</a></p>
    <p>По остальным вопросам пишите в Telegram <span role="img" aria-label="hugging face">🤗</span></p>
    <ul>
      <li>
        <a href={ContactLinks.TELEGRAM} target="blank" title="Write to @akzhario">
          <svg width="35" height="35">
            <use xlinkHref="#telegram" />
          </svg>
        </a>
      </li>
      <li>
        <a href={ContactLinks.GITHUB} target="blank" title="Open repository">
          <svg width="35" height="35">
            <use xlinkHref="#github" />
          </svg>
        </a>
      </li>
    </ul>
  </section>
);

export default Contacts;
