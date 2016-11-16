/**
 * Created by rahul on 29/10/16.
 */
import React from 'react';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory} from 'react-router';

import App from './App'

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/(:filter)" component={App}/>
        </Router>
    </Provider>
);

export default Root;
