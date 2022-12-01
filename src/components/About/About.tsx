/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import Header from '@components/Header';
import { AppRoutes } from '@consts/const';

import VbaWikiLink from './VbaWikiLink';
import DryWikiLink from './DryWikiLink';
import { SearchExample1, SearchExample2, SearchExample3 } from './SearchExamples';

const About: React.FC = () => (
  <section>
    <Header id="about" text="What is it"/>
    <p>
      Excel allows you to automate routine and <VbaWikiLink /> helps
      you with that. Excel VBA API is quite wordy. You may want to
      simplify the interaction with it. This site is here to help you!
    </p>
    <p>
      <b>vba helpers *</b> is a code snippets collection intended to solve common Excel programming tasks
      like: <SearchExample1 /> or <SearchExample2 /> or <SearchExample3 /> and <Link to={AppRoutes.CATEGORIES}>many others</Link>.
      Encapsulating the logic inside procedures or functions for the future
      reuse makes your solution simplier for development and maintainance (<DryWikiLink />).
    </p>
  </section>
);

export default About;
