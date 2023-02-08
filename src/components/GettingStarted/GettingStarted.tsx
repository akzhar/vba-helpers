import React from 'react';

import Header from '@components/Header';

import CodeStorageLink from './CodeStorageLink';

const GettingStarted: React.FC = () => (
  <section>
  <Header id="getting-started" text="Getting started"/>
    <p>
      You can easily search the helper that is suitable for your needs: just
      put a few keywords and press Enter. All the helpers are stored
      in the <CodeStorageLink /> as plain text files and supplied with
      an example of usage so you can easily apply it in your project.
    </p>
  </section>
);

export default GettingStarted;
