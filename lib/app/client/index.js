
import React from 'react';
import { render as Render } from 'react-dom';
import { createStore as CreateStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../components/home';
import Counter from '../redux/counter';

const initialState = window.__INITIAL_STATE__;

const store = CreateStore(Counter, initialState);

Render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
