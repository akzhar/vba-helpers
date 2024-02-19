/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import Header from '@components/Header';
import { AppRoutes } from '@consts/const';

import VbaWikiLink from './VbaWikiLink';
import ExcelVbaDocsLink from './ExcelVbaDocsLink';
import { SearchExample1, SearchExample2, SearchExample3 } from './SearchExamples';
import CodeStorageLink from './CodeStorageLink';

const About: React.FC = () => (
  <section>
    <Header id="about" text="What this site is about" icon="💡" />
    <p>
      This site can help you to avoid writing the same <VbaWikiLink /> code every time.
    </p>
    <p>
      <b>vba helpers</b> is an open source <CodeStorageLink /> intended
      to solve general Excel programming tasks
      like: <SearchExample1 /> or <SearchExample2 /> or <SearchExample3 /> and <Link to={AppRoutes.CATEGORIES}>many others</Link>.
    </p>
    <p>
      The main idea is to hide some tricky parts of <ExcelVbaDocsLink /> and
      provide you a set of ready-made procedures / functions to be used. All the helpers
      supplied with parameters description and example of usage so you can easily apply them in your macros.
    </p>
  </section>
);

export default About;
