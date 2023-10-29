// import { test, describe, expect } from '@jest/globals';
import React from 'react';
import * as redux from 'react-redux';
import { applyMiddleware, Store, createStore, Dispatch, Action } from 'redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { THelper, TCategory } from '@services/Api';

import reducer, { TState, initialState } from '@store/reducer';

import App from './App';

const HEADER_CATEGORIES = 'Helpers categories';
const HEADER_ABOUT = 'What is it?';

const category0: TCategory = {
  id: '0',
  category: 'Arrays',
  helpersCount: 13,
  keywords: [
    'получить длину массива',
    'получить количество элементов в массиве',
    'получить количество элементов массива',
    'get array length',
    'get length of array',
    'get array size',
    'конвертировать диапазон в массив',
    'конвертация диапазона в массив'
  ]
};

const category1: TCategory = {
  id: '1',
  category: 'Transformation',
  helpersCount: 8,
  keywords: [
    'конвертировать диапазон в массив',
    'конвертация диапазона в массив',
    'convert range to array',
    'конвертировать unix time в дату',
    'конвертация unix time в дату',
    'конвертировать юникс время в дату',
    'конвертация юникс время в дату',
    'convert unix time to date'
  ]
};

const helper3: THelper = {
  id: '3',
  updated_at: '2023-10-29',
  category: [
    'Transformation',
    'Arrays'
  ],
  name: 'Rng2Array',
  title: 'Converts range to array',
  description: 'Returns 1-dim array contains all values from passed range.',
  _keywords: 'конвертировать диапазон в массив\nконвертация диапазона в массив\nconvert range to array',
  // eslint-disable-next-line max-len
  usage: 'Sub Example()\n    Dim ws As Worksheet: Set ws = ThisWorkbook.Sheets(1)\n    Dim rng As Range: Set rng = ws.Range("A1:A10")\n    Dim arr() As String: arr = Rng2Array(rng)\n    \' ... выполняем действия с массивом\n    ws.Range("A1").Resize(Ubound(arr) + 1, 1) = Application.Transponse(arr)\nEnd Sub',
  file: '3.bas',
  demo: ''
};

const helper21: THelper = {
  id: '21',
  updated_at: '2023-10-29',
  category: [
    'Transformation',
    'Date and time'
  ],
  name: 'UnixTime2ExcelDate',
  title: 'Converts Unix 13-digit timestamp to date',
  description: 'Returns date',
  // eslint-disable-next-line max-len
  _keywords: 'конвертировать unix time в дату\nконвертация unix time в дату\nконвертировать юникс время в дату\nконвертация юникс время в дату\nconvert unix time to date',
  // eslint-disable-next-line max-len
  usage: 'Sub Example()\n    Dim d As Date: d = UnixTime2ExcelDate("1443852054000")\n    Debug.Print (d) \' 03.10.2015 6:00:54\nEnd Sub',
  file: '21.bas',
  demo: '21.gif'
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.fetch = jest.fn((url: string) => {
  return Promise.resolve({
    json: (): Promise<THelper[]> | Promise<TCategory[]> | Promise<unknown[]> => {
      let response: unknown[] = [];
      switch(true) {
        case url.includes('/categories'):
          response = [category0, category1];
          break;
        case url.includes('/helpers'):
          response = [helper3, helper21];
          break;
        default:
          break;
      }
      return Promise.resolve(response);
    }
  });
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.marked = {
  parse: (textContent: string) => textContent
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.hljs = {
  configure: () => { return },
  highlightAll: () => { return }
}

const createMockedStore = configureStore([thunk]);

const mockedStore = createMockedStore(initialState);
const createRealStore = (state: TState): Store<TState> => {
  return createStore(
    reducer,
    state,
    applyMiddleware(thunk)
  );
}
const realStore = createRealStore(initialState);

function renderApp(url: string, store: Store<TState> | MockStoreEnhanced<unknown>) {

  const history = createMemoryHistory();
  history.push(url);

  render(
    <redux.Provider store={store}>
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    </redux.Provider>
  );

}

 describe('App routing works correctly', () => {

   test('Render Home page when user navigates to /', () => {
     const url = '/';
     renderApp(url, mockedStore);
     expect(screen.getByRole('link', { current: true })).toHaveAttribute('href', url);
     expect(screen.getByText(HEADER_ABOUT)).toBeInTheDocument();
     expect(screen.queryByText(HEADER_CATEGORIES)).not.toBeInTheDocument();
   });

   test('Render Search page when user navigates to /search', async () => {
     const url = '/search';
     await act(() => {
       renderApp(url, realStore);
     });
     expect(screen.getByRole('link', { current: true })).toHaveAttribute('href', url);
     expect(screen.getByText(category0.category)).toBeInTheDocument();
     expect(screen.getByText(HEADER_CATEGORIES)).toBeInTheDocument();
     expect(screen.queryByText(HEADER_ABOUT)).not.toBeInTheDocument();
   });

   test('Render 404 page when user navigates to wrong path', () => {
     const url = '/not-exist-path';
     renderApp(url, mockedStore);
     expect(screen.getByText('Такой страницы не найдено...')).toBeInTheDocument();
   });

 });

async function search(searchType: string, searchQuery: string) {
  const url = '/search';
  await act(() => {
    renderApp(url, realStore);
  });
  const input = screen.getByTestId('search-input');
  const select = screen.getByTestId('search-select');
  await act(() => {
    fireEvent.change(select, {target: { value: searchType }});
    userEvent.type(input, searchQuery);
    fireEvent.click(screen.getByTestId('search-submit'));
  });
  const state = await realStore.getState();
  return state;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function doSearchTest(searchType: string, searchQuery: string, spy: jest.SpyInstance<Dispatch<Action<any>>, []>) {
  const state = await search(searchType, searchQuery);
  // 1 SET_SEARCH_PARAMS type, 2 SET_SEARCH_PARAMS query
  // 3 SET_SEARCH_LOADING true
  // 4 SET_HELPERS, 5 SET_INFO_MESSAGE
  // 5 SET_SEARCH_LOADING false
  // 7 SHOW_MESSAGE, 8 RESET_MESSAGE
  expect(spy).toBeCalledTimes(8);
  expect(state.search.params.type).toBe(searchType);
  expect(state.search.params.query).toBe(searchQuery);
  expect(state.helpers.isLoading).toBe(false);
  const helper = screen.getByTestId(`helper-${helper21.id}`);
  expect(helper).toBeInTheDocument();
}

describe('User actions work correctly', () => {

  const spyDispatch = jest.spyOn(redux, 'useDispatch');

  test('User can search helper by title', async () => {
    const searchType = 't';
    const searchQuery = helper21.title;
    await doSearchTest(searchType, searchQuery, spyDispatch);
  });

  test('User can search helper by category', async () => {
    const searchType = 'c';
    const searchQuery = helper21.category[1];
    await doSearchTest(searchType, searchQuery, spyDispatch);
  });

  test('User can search helper by keywords', async () => {
    const searchType = 'k';
    const searchQuery = helper21._keywords.split('\n')[0];
    await doSearchTest(searchType, searchQuery, spyDispatch);
  });

  test('User can search helper by name', async () => {
    const searchType = 'n';
    const searchQuery = helper21.name;
    await doSearchTest(searchType, searchQuery, spyDispatch);
  });

  test('User can search helper by id', async () => {
    const searchType = 'i';
    const searchQuery = helper21.id;
    await doSearchTest(searchType, searchQuery, spyDispatch);
  });


});
