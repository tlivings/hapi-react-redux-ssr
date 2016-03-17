
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/layout';
import Page1 from './components/page1';
import Page2 from './components/page2';

export default (
    <Route name="home" component={Layout} path="/">
        <IndexRoute component={Page1}/>
        <Route name="page2" component={Page2} path="/page2"/>
    </Route>
);
