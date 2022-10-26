import React from 'react';

import Header from '@components/Header';
import { AboutLinks } from '@consts/const';

const About: React.FC = () => (
  <section className="about">
    <Header id="about" text="What is it?"/>
    <p>
      When writing macros
      for <b>Excel</b> using <a href={AboutLinks.WIKI_VBA} target="_blank" rel="noreferrer">VBA</a> often
      there is a need to separate a part of the code into separate
      functions/procedures for further reuse
      in other places. For example, it is reasonable to put the
      code for sorting/filtering arrays into separate functions/procedures
      for further reuse in other macros. This approach simplifies debugging and code support.
      Over time there is a need to store such pieces of code somewhere.
    </p>
    <p>
      <b>vba helpers</b> - is a free collection of small code pieces
      intended to help solve common Excel programming cases.
      All the helpers stored as <b>.bas</b> files
      in the <a href={AboutLinks.GIT_REPO} target="_blank" rel="noreferrer">git repository</a> and
      this site allows you to easily find the helper what you need.
    </p>
    <dl>
      <dt>helper *</dt>
      <dd>utillity procedure / function</dd>
    </dl>
    <p>
      Each helper performs a specific task.
      All helpers are divided into categories.
    </p>
  </section>
);

export default About;
