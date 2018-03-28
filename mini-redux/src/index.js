import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from './mini-react-redux'
import {store} from './store'
import App from './App2';
// import Page from './context-demo'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
