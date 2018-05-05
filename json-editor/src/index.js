/**
 * Created by 30113 on 2018/5/4.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './App'


const root = document.getElementById('root')
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        root
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default
        render(NextApp)
    })
}