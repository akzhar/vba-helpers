import React from 'react';

import Button from '@components/Button';
import { AppRoutes } from '@consts/const';

const VBA_WIKI_URL = 'https://ru.wikipedia.org/wiki/Visual_Basic_for_Applications';

const About: React.FC = () => (
  <section className="about">
    <div className="about__column">
      <p>Это небольшая коллекция <a href={VBA_WIKI_URL} target="blank">VBA</a> хелперов</p>
      <dl>
        <dt>Хелпер *</dt>
        <dd>вспомогательная процедура / функция</dd>
      </dl>
      <p>Хелперы хранятся в виде <b>.bas</b> файлов и разделены на категории</p>
    </div>
    <div className="about__column">
      <p>Поиск возможен:</p>
      <ul>
        <li><Button url={`${AppRoutes.SEARCH}?type=t`}>по заголовку хелпера</Button></li>
        <li><Button url={`${AppRoutes.SEARCH}?type=c`}>по категории хелпера</Button></li>
        <li><Button url={`${AppRoutes.SEARCH}?type=k`}>по ключевому слову (фразе)</Button></li>
        <li><Button url={`${AppRoutes.SEARCH}?type=n`}>по имени хелпера</Button></li>
      </ul>
    </div>
  </section>
);

export default About;
