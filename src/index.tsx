import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, Store, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer, { TState, initialState } from '@store/reducer';
import App from './App';

import './index.sass';

const store: Store<TState> = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

const container = document.querySelector('#root');

if (container) {
  createRoot(container).render(
    <Provider store={store}>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </Provider>,
  );
}
