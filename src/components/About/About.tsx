import React from 'react';

import Button from '@components/Button';
import { AppRoutes } from '@consts/const';

const VBA_WIKI_URL = 'https://ru.wikipedia.org/wiki/Visual_Basic_for_Applications';

const About: React.FC = () => (
  <section className="about">
    <div className="about__column">
      <p>Небольшая коллекция хелперов для <a href={VBA_WIKI_URL} target="blank">VBA</a></p>
      <dl>
        <dt>Хелпер *</dt>
        <dd>вспомогательная процедура / функция</dd>
      </dl>
    </div>
    <div className="about__column">
      <p><Button url={AppRoutes.SEARCH}>Искать</Button>можно по ключевым словам или категории</p>
      <p>Все категории представлены на отдельной<Button url={AppRoutes.CATEGORIES}>странице</Button></p>
    </div>
  </section>
);

export default About;
