import React from 'react';

import Header from '@components/Header';

const VBA_WIKI_URL = 'https://ru.wikipedia.org/wiki/Visual_Basic_for_Applications';
const CODE_GIT_URL = 'https://github.com/akzhar/vba-helpers-api/tree/main/data/code'

const About: React.FC = () => (
  <section className="about">
    <Header id="about" text="Что это такое?"/>
    <p>
      При написании макросов для <b>Excel</b> часто
      возникает потребность выделить часть кода в отдельные
      функции / процедуры с целью последующего переиспользования
      в других местах. Например, код для сортировки /
      фильтрации массивов разумно вынести в отдельные ф-ции /
      процедуры с целью последующего переиспользования в других
      макросах. Подобный подход разгружает основные модули от
      избыточных конструкций, упрощает отладку и поддержку кода.
      Такие кусочки <a href={VBA_WIKI_URL} target="_blank" rel="noreferrer">VBA</a> кода
      со временем копятся, возникакет потребность их где-то хранить.
    </p>
    <p>
      <b>vba helpers</b> - это небольшая коллекция таких кусочков
      кода (хелперов) в формате <b>.bas</b> файлов. Хелперы хранятся
      в <a href={CODE_GIT_URL} target="_blank" rel="noreferrer">git репозитории</a>,
      а веб интерфейс позволяет найти и применить нужный хелпер в своем макросе.
    </p>
    <dl>
      <dt>helper *</dt>
      <dd>вспомогательная процедура / функция</dd>
    </dl>
    <p>
      Каждый хелпер выполняет определенную узкую задачу.
      Все хелперы разделены на категории.
    </p>
  </section>
);

export default About;
