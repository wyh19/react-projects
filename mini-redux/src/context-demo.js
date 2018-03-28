/**
 * Created by 30113 on 2018/3/27.
 */
import React from 'react'
import PropTypes from 'prop-types'

class Sider extends React.Component {
    render() {
        return (
            <div>
                <div>左侧栏</div>
                <Menu/>
            </div>
        )
    }
}

class Menu extends React.Component {
    static contextTypes = {
        user:PropTypes.string
    }
    render() {
        return(
            <div>{this.context.user}的菜单栏</div>
        )
    }
}

class Page extends React.Component {
    static childContextTypes = {
        user:PropTypes.string
    }
    constructor(props) {
        super(props)
        this.state = {
            user: 'wyh'
        }
    }
    getChildContext(){
        return this.state
    }
    render() {
        return (
            <div>
                我是{this.state.user}
                <Sider/>
            </div>
        )
    }
}

export default Page