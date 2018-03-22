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
    mapMenus(menus){
        return menus.map(v=>{
            if(v.children){
                return (
                    <SubMenu key={v.text} title={<span><Icon type={v.icon}/><span>{v.text}</span></span>}>
                        {
                            this.mapMenus(v.children)
                        }
                    </SubMenu>
                )
            }else{
                return (
                    <MenuItem key={v.text}>
                        <Icon type={v.icon}/>
                        <span className="nav-text">{v.text}</span>
                    </MenuItem>
                )
            }
        })
    }
    render() {
        return (
            <Menu theme="dark" mode={this.props.mode} defaultSelectedKeys={['bench']}>
                <MenuItem key="bench">
                    <Icon type="laptop"/>
                    <span className="nav-text">首页</span>
                </MenuItem>
                {
                    this.mapMenus(this.props.menus)
                }
            </Menu>
        );
    }
}

export default MenuBar