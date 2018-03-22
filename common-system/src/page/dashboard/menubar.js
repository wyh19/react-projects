/**
 * Created by 30113 on 2018/3/22.
 */
import React from 'react'
import {Menu, Icon} from 'antd';
import {connect} from 'react-redux'
import { getMenuList} from '../../redux/menu.redux'

const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item

@connect(
    state=>state.menu,
    {getMenuList}
)
class MenuBar extends React.Component {
    componentDidMount(){
        this.props.getMenuList()
    }

    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {
                    this.props.menus.map(v=>{

                    })
                }
                <MenuItem key="1">
                    <Icon type="laptop"/>
                    <span className="nav-text">首页</span>
                </MenuItem>
                <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                    <MenuItem key="sub1_1">Option 1</MenuItem>
                    <MenuItem key="sub1_2">Option 2</MenuItem>
                    <MenuItem key="sub1_3">Option 3</MenuItem>
                    <MenuItem key="sub1_4">Option 4</MenuItem>
                </SubMenu>
            </Menu>
        );
    }
}

export default MenuBar