/**
 * Created by 30113 on 2018/2/20.
 */
import React from 'react'
import {Button,List,InputItem,WingBlank,WhiteSpace} from 'antd-mobile'
import Logo from '../../component/logo/logo'
import {connect} from 'react-redux'
import {Redirect}from 'react-router-dom'
import {login} from '../../redux/user.redux'

import imoocForm from '../../component/imooc-form/imooc-form'

// function Wraper(Comp){
// //属性代理
// //     class WraperComp extends React.Component{
// //         render(){
// //             return(
// //                 <div>
// //                     <p>HOC高阶组件</p>
// //                     <Comp name="aaa" {...this.props}/>
// //                 </div>
// //             )
// //         }
// //     }
// //反向继承
//     class WraperComp extends Comp{
//         componentDidMount(){
//             console.log('HOC反向继承')
//         }
//         render(){
//             return(
//                 <Comp/>
//             )
//         }
//     }
//     return WraperComp
// }
//
// @Wraper
// class Hello extends React.Component{
//     render(){
//         return <h2>Hello Imooc I love React&redux</h2>
//     }
// }



@connect(
    state=>state.user,
    {login}
)
@imoocForm
class Login extends React.Component{
    constructor(props){
        super(props)
        // this.state = {
        //     user:'',
        //     pwd:''
        // }
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    register(){
        this.props.history.push('/register')
    }
    // handleChange(key,val){
    //     this.setState({
    //         [key]:val
    //     })
    // }
    handleLogin(){
        this.props.login(this.props.state)
    }
    render(){
        return (
            <div>
                {/*<Hello/>*/}
                {(this.props.redirectTo&&this.props.redirectTo!=='/login')?<Redirect to={this.props.redirectTo}/>:null}
                <Logo></Logo>
                <WingBlank>
                    <List>
                        {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                        <InputItem
                            onChange={v=>this.props.handleChange('user',v)}
                        >用户</InputItem>
                        <WhiteSpace/>
                        <InputItem
                            onChange={v=>this.props.handleChange('pwd',v)}
                            type="password"
                        >密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button onClick = {this.handleLogin} type="primary">登录</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register} type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login