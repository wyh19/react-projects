/**
 * Created by 30113 on 2018/3/22.
 */
import React from 'react'
import {Layout, Icon} from 'antd';
import MenuBar from './menubar'

const {Header, Sider, Content} = Layout;

class Dashboard extends React.Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };

    toggle = () => {
        let collapsed =!this.state.collapsed
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' :'inline',
        });
    }

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo"/>
                    <MenuBar mode={this.state.mode}/>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{padding: 24, background: '#fff', minHeight: 280}}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Dashboard