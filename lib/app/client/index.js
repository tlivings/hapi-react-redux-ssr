
import React from 'react';
import { render as Render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import Routes from '../universal/routes';
import ConfigureStore from '../redux/store';
import { browserHistory as BrowserHistory } from 'react-router';
import { syncHistoryWithStore as SyncHistory } from 'react-router-redux';

const initialState = window.__INITIAL_STATE__;

const store = ConfigureStore(initialState);

const history = SyncHistory(BrowserHistory, store);

Render(
    <Provider store={store}>
        <Router history={history}>
            {Routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);
