/**
 * Created by 30113 on 2018/3/22.
 */
import React from 'react'

import LoginForm from './login-form'
import './login.scss'

class Login extends React.Component {

    render() {
        return (
            <div className="login">
                <div className="login-panel">
                    <h2>请登录</h2>
                    <LoginForm/>
                </div>
            </div>
        )
    }
}

export default Login