/**
 * Created by 30113 on 2018/3/21.
 */
import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {withRouter } from 'react-router-dom'

import './login.scss'
const FormItem = Form.Item;

@withRouter
@Form.create()
class LoginForm extends React.Component {
    constructor(props){
        super(props)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.history.push('/dashboard')
            }
        });
    }
    handleRegister =()=>{
        this.props.history.push('/register')
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className='login-form'>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a onClick={this.handleRegister}>register now!</a>
                </FormItem>
            </Form>
        );
    }
}

export default LoginForm
