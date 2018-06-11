/**
 * Created by 30113 on 2018/3/10.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Result, List,WhiteSpace,Modal} from 'antd-mobile'
import browserCookies from 'browser-cookies'
import {Redirect} from 'react-router-dom'
import {logoutSubmit} from '../../redux/user.redux'
@connect(
    state => state.user,
    {logoutSubmit}
)
class User extends React.Component {
    constructor(props){
        super(props)
        this.logout = this.logout.bind(this)
    }
    logout(){
        Modal.alert('注销','确认退出吗',[
            {text:'取消',onPress:f=>f},
            {text:'确认',onPress:()=>{
                browserCookies.erase('userid')
                this.props.logoutSubmit()
            }},
        ])
    }
    render() {
        const props = this.props
        const Item = List.Item
        const Brief= List.Item.Brief
        return props.user ? (
            <div>
                <Result
                    img={<img src={require(`../img/${props.avatar}.png`)} style={{width: 50}} alt=""/>}
                    title={props.user}
                    message={props.type === 'boss' ? props.company : null}
                />
                <List renderHeader={() => '简介'}>
                    <Item>
                        {props.title}
                        {props.desc.split('\n').map(v=>(
                            <Brief key={v}>{v}</Brief>
                        ))}
                        {props.money?<Brief>薪资：{props.money}</Brief>:null}
                    </Item>
                </List>
                <WhiteSpace/>
                <List>
                    <Item onClick={this.logout}>退出登录</Item>
                </List>
            </div>
        ) : <Redirect to={props.redirectTo}/>
    }
}

export default User