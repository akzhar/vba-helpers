import React from 'react';
import capitalize from '@utils/capitalize';

import Button from '@components/Button';
import Header from '@components/Header';
import { SearchTypeToHint } from '@components/SearchForm';
import { AppRoutes } from '@consts/const';

const searchTypes = Object.keys(SearchTypeToHint);

const SearchMethods: React.FC = () => (
  <section className="search-methods">
    <Header id="search-methods" text="Ways to search" />
    <ol className="search-methods__list">
      <li>Search on site
        <ul className="search-methods__sub-list">
          {searchTypes.map(type => (
            <li key={type}>
              <Button url={`${AppRoutes.SEARCH}?type=${type}`}>{capitalize(SearchTypeToHint[type])}</Button>
            </li>
          ))}
        </ul>
      </li>
      <li><Button url={AppRoutes.SEARCH_HELPER}>Search from Excel</Button></li>
    </ol>
  </section>
);

export default SearchMethods;
