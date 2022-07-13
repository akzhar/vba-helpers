// import { test, describe, expect } from '@jest/globals';
import React from 'react';
import * as redux from 'react-redux';
import { applyMiddleware, Store, createStore } from 'redux';
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

const HEADER_CATEGORIES = 'Категории хелперов';
const HEADER_ABOUT = 'Что это такое?';

const category0: TCategory = {
  id: '0',
  category: 'Массивы',
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
  category: 'Конвертация',
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
  category: [
    'Конвертация',
    'Массивы'
  ],
  name: 'Rng2Array',
  title: 'Ф-ция возвращает 1 мерный массив, заполненный значениями из диапазона',
  description: 'Все значения приводятся к строке',
  _keywords: 'конвертировать диапазон в массив\nконвертация диапазона в массив\nconvert range to array',
  // eslint-disable-next-line max-len
  usage: 'Sub Example()\n    Dim ws As Worksheet: Set ws = ThisWorkbook.Sheets(1)\n    Dim rng As Range: Set rng = ws.Range("A1:A10")\n    Dim arr() As String: arr = Rng2Array(rng)\n    \' ... выполняем действия с массивом\n    ws.Range("A1").Resize(Ubound(arr) + 1, 1) = Application.Transponse(arr)\nEnd Sub',
  file: '3.bas'
};

const helper21: THelper = {
  id: '21',
  category: [
    'Конвертация',
    'Работа с датой и временем'
  ],
  name: 'UnixTime2ExcelDate',
  title: 'Ф-ция конвертирует Unix 13-digit time string в Excel дату',
  description: '',
  // eslint-disable-next-line max-len
  _keywords: 'конвертировать unix time в дату\nконвертация unix time в дату\nконвертировать юникс время в дату\nконвертация юникс время в дату\nconvert unix time to date',
  // eslint-disable-next-line max-len
  usage: 'Sub Example()\n    Dim d As Date: d = UnixTime2ExcelDate("1443852054000")\n    Debug.Print (d) \' 03.10.2015 6:00:54\nEnd Sub',
  file: '21.bas'
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
  parse: (str: string) => str
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

// describe('App routing works correctly', () => {

//   test('Render Home page when user navigates to /', () => {
//     const url = '/';
//     renderApp(url, mockedStore);
//     expect(screen.getByRole('link', { current: true })).toHaveAttribute('href', url);
//     expect(screen.getByText(HEADER_ABOUT)).toBeInTheDocument();
//     expect(screen.queryByText(HEADER_CATEGORIES)).not.toBeInTheDocument();
//   });

//   test('Render Search page when user navigates to /search', async () => {
//     const url = '/search';
//     await act(() => {
//       renderApp(url, mockedStore);
//     });
//     expect(screen.getByRole('link', { current: true })).toHaveAttribute('href', url);
//     expect(screen.getByText(category0.category)).toBeInTheDocument();
//     expect(screen.getByText(HEADER_CATEGORIES)).toBeInTheDocument();
//     expect(screen.queryByText(HEADER_ABOUT)).not.toBeInTheDocument();
//   });

//   test('Render 404 page when user navigates to wrong path', () => {
//     const url = '/not-exist-path';
//     renderApp(url, mockedStore);
//     expect(screen.getByText('Такой страницы не найдено...')).toBeInTheDocument();
//   });

// });

describe('User actions work correctly', () => {

  const spyDispatch = jest.spyOn(redux, 'useDispatch');

  test('User can search helper by title', async () => {
    const query = 'Unix 13-digit time';
    const url = '/search';
    const realStore = createRealStore(initialState);

    await act(() => {
      renderApp(url, realStore);
    });

    const input = screen.getByTestId('search-input');
    const select = screen.getByTestId('search-select');
    userEvent.type(input, '!');
    expect(select).toHaveValue('t');
    userEvent.type(input, query);
    await act(() => {
      fireEvent.click(screen.getByTestId('search-submit'));
    });
    const state = await realStore.getState();
    // const helperHeader = screen.getByText(helper21.name);
    expect(spyDispatch).toBeCalled();
    // expect(helperHeader).toHaveTextContent(query);
    expect(state.search.params.type).toBe('t');
    expect(state.search.params.query).toBe(query);
  });

  // test('User can close a task', async () => {
  //   const text = 'Buy a bottle of water';
  //   const task: TTask = { id: '123', text, isCompleted: false };
  //   const url = '/';
  //   const realStore = createRealStore({...initialState, tasks: { items: [task] }});

  //   renderApp(url, realStore);
  //   const checkbox = screen.getByLabelText(text);
  //   const li = screen.getByText(text);

  //   fireEvent.click(li);
  //   const state = await realStore.getState();
  //   expect(checkbox).toBeChecked();
  //   expect(state.tasks.items[0].isCompleted).toBe(true);
  // });

  // test('User can reopen a task', async () => {
  //   const text = 'Buy a bottle of water';
  //   const task: TTask = { id: '123', text, isCompleted: true };
  //   const url = '/';
  //   const realStore = createRealStore({...initialState, tasks: { items: [task] }});

  //   renderApp(url, realStore);
  //   const checkbox = screen.getByLabelText(text);
  //   const li = screen.getByText(text);

  //   fireEvent.click(li);
  //   const state = await realStore.getState();
  //   expect(checkbox).not.toBeChecked();
  //   expect(state.tasks.items[0].isCompleted).toBe(false);
  // });

  // test('User can clear completed tasks', async () => {
  //   const text1 = 'Buy a bottle of water';
  //   const text2 = 'Do homework';
  //   const task1: TTask = { id: '123', text: text1, isCompleted: false };
  //   const task2: TTask = { id: '321', text: text2, isCompleted: true };
  //   const url = '/';
  //   const realStore = createRealStore({...initialState, tasks: { items: [task1, task2] }});

  //   renderApp(url, realStore);
  //   const btn = screen.getByText('Clear completed');

  //   fireEvent.click(btn);
  //   const state = await realStore.getState();
  //   expect(screen.getByText(text1)).toBeInTheDocument();
  //   expect(screen.queryByText(text2)).not.toBeInTheDocument();
  //   expect(state.tasks.items.length).toBe(1);
  //   expect(state.tasks.items[0].id).toBe('123');
  // });

});
