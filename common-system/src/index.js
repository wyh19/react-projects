import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux'

import reducers from './reducer'
import './index.css';

import Login from './page/login/login'
import Register from './page/register/register'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/dashboard" component={Register}/>
                <Route component={Login}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
