import React from 'react';

import Header from '@components/Header';

import GitRepoIssuesLink from './GitRepoIssuesLink';
import GitRepoLink from './GitRepoLink';
import TelegramLink from './TelegramLink';

const Contacts: React.FC = () => (
  <section className="contacts">
    <Header id="contacts" text="Contacts" />
    <p className="contacts__info">
      Share your ideas and issues on <GitRepoIssuesLink>GitHub Issues</GitRepoIssuesLink>.<br/>
      Feel free to touch me in <TelegramLink>Telegram</TelegramLink>.
    </p>
    <ul className="contacts__list">
      <li>
        <GitRepoLink>
          <svg width="35" height="35">
            <use xlinkHref="#github" />
          </svg>
        </GitRepoLink>
      </li>
      <li>
        <TelegramLink>
          <svg width="35" height="35">
            <use xlinkHref="#telegram" />
          </svg>
        </TelegramLink>
      </li>
    </ul>
  </section>
);

export default Contacts;
