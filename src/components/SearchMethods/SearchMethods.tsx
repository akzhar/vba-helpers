import React from 'react';
import getPlural from '@utils/getPlural';
import capitalize from '@utils/capitalize';

import Button from '@components/Button';
import Header from '@components/Header';
import { SearchTypeToHint } from '@components/SearchForm';
import { AppRoutes } from '@consts/const';

const searchTypes = Object.keys(SearchTypeToHint);

const SearchMethods: React.FC = () => (
  <section className="search-methods">
    <Header
      id="search-methods"
      text={`${searchTypes.length} ${getPlural(searchTypes.length, 'way', 'ways', 'ways')} to search helpers`}
    />
    <ul>
      {searchTypes.map(type => (
        <li key={type}>
          <Button url={`${AppRoutes.SEARCH}?type=${type}`}>{capitalize(SearchTypeToHint[type])}</Button>
        </li>
      ))}
    </ul>
  </section>
);

export default SearchMethods;
