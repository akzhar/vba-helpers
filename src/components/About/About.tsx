/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import Header from '@components/Header';
import { AppRoutes } from '@consts/const';

import VbaWikiLink from './VbaWikiLink';
import DryWikiLink from './DryWikiLink';
import ExcelVbaDocsLink from './ExcelVbaDocsLink';
import { SearchExample1, SearchExample2, SearchExample3 } from './SearchExamples';

const About: React.FC = () => (
  <section>
    <Header id="about" text="What this site is about" icon="💡" />
    <p>
      Once you may want to to automate your routine and <VbaWikiLink /> can help
      you with that. <ExcelVbaDocsLink /> is quite wordy and this site can help you
      don&apos;t write the same code every time.
    </p>
    <p>
      <b>vba helpers *</b> is a code snippets collection intended to solve common Excel programming tasks
      like: <SearchExample1 /> or <SearchExample2 /> or <SearchExample3 /> and <Link to={AppRoutes.CATEGORIES}>many others</Link>.
      Keeping the logic inside procedures or functions for the future
      reuse makes your solution more readable and reliable (<DryWikiLink />).
    </p>
  </section>
);

export default About;
