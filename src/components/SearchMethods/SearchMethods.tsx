import React from 'react';
import getPlural from '@utils/getPlural';

import Button from '@components/Button';
import Header from '@components/Header';
import { SearchTypeToHint } from '@components/SearchForm';
import { AppRoutes } from '@consts/const';

const searchTypes = Object.keys(SearchTypeToHint);

const SearchMethods: React.FC = () => (
  <section className="search-methods">
    <Header
      id="search-methods"
      text={`${searchTypes.length} ${getPlural(searchTypes.length, 'способ', 'способа', 'способов')} найти хелпер`}
    />
    <ol>
      {searchTypes.map(type => (
        <li key={type}>
          <Button url={`${AppRoutes.SEARCH}?type=${type}`}>{SearchTypeToHint[type]}</Button>
        </li>
      ))}
    </ol>
  </section>
);

export default SearchMethods;
