/**
 * Created by 30113 on 2018/3/26.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './App-connect'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {counter} from './reducer'

const store = createStore(counter)
const root = document.getElementById('root')
const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component/>
            </Provider>
        </AppContainer>,
        root,
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./App.js', () => {
        const NextApp = require('./App.js').default
        render(NextApp)
    })
}
