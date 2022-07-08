import React from 'react';

import Button from '@components/Button';
import Header from '@components/Header';
import { SearchTypeToHint } from '@components/SearchForm';
import { AppRoutes } from '@consts/const';

const VBA_WIKI_URL = 'https://ru.wikipedia.org/wiki/Visual_Basic_for_Applications';
const searchTypes = Object.keys(SearchTypeToHint);

const About: React.FC = () => (
  <section className="about">
    <Header id="about" text="Что это такое?"/>
    <p>
      При написании макросов для <b>Excel</b> часто
      возникает потребность выделить часть кода в отдельные
      функции / процедуры с целью последующего переиспользования
      в других местах. Например, код для получения последней
      строки на листе рабочей книги или код для сортировки /
      фильтрации массивов разумно вынести в отдельные ф-ции /
      процедуры с целью последующего переиспользования в других
      местах. Подобный подход разгружает основные модули от
      избыточных конструкций, упрощает отладку и поддержку кода.
      Такие кусочки <a href={VBA_WIKI_URL} target="_blank" rel="noreferrer">VBA</a> кода
      со временем накапливаются, возникакет потребность их где-то хранить.
    </p>
    <p>
      <b>vba helpers</b> - это небольшая личная коллекция таких кусочков
      кода (хелперов) в формате <b>.bas</b> файлов. Хелперы хранятся
      в <b>git</b> репозитории, а веб интерфейс позволяей быстро найти и
      применить нужный хелпер.
    </p>
    <dl>
      <dt>helper *</dt>
      <dd>вспомогательная процедура / функция</dd>
    </dl>
    <p>
      Каждый хелпер выполняет определенную достаточно узкую задачу.
      Для более удобного поиска все хелперы разделены на категории.
      А также реализовано несколько способо найти нужный хелпер.
    </p>
    <Header id="search-methods" text={`${searchTypes.length} способа найти хелпер`}/>
    <ol>
      {searchTypes.map(type => (
        <li key={type}>
          <Button url={`${AppRoutes.SEARCH}?type=${type}`}>{SearchTypeToHint[type]}</Button>
        </li>
      ))}
    </ol>
  </section>
);

export default About;
