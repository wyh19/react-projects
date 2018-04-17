/**
 * Created by 30113 on 2018/3/22.
 */
import React from 'react'
import Framework from './frame'
import {Switch, Route} from 'react-router-dom'
import QueueAnim from 'rc-queue-anim';
import './dashbord.scss'

import Bench from '../bench/bench'
import About from '../about/about'
import TableDemo from '../demo/table/table-demo'
import TreeDemo from '../demo/tree/tree-demo'
import ModalDemo from '../demo/modal/modal-demo'
import Chess from '../dnd/chess/Chess'
import DusbinDemos from '../dnd/dustbin/DusbinDemos'
import DragAround from '../dnd/DragAround/DragAround'
import Nesting from '../dnd/Nesting/Nesting'
import Sortable from '../dnd/Sortable/Sortable'
import Customize from '../dnd/Customize/Customize'
import Other from '../dnd/Other/Other'
import OfficialAnimation from '../animation/official/OfficialAnimation'
class Dashboard extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const {pathname} = this.props.location
        const routeList = [
            {
                path: '/bench',
                component: Bench
            },
            {
                path: '/table',
                component: TableDemo
            },
            {
                path: '/tree',
                component: TreeDemo
            },
            {
                path: '/modal',
                component: ModalDemo
            },
            {
                path: '/chess',
                component: Chess
            },
            {
                path: '/dustbin',
                component: DusbinDemos
            },
            {
                path: '/dragaround',
                component: DragAround
            },
            {
                path: '/nesting',
                component: Nesting
            },
            {
                path: '/about',
                component: About
            },
            {
                path: '/sortable',
                component: Sortable
            },
            {
                path: '/customize',
                component: Customize
            },
            {
                path: '/other',
                component: Other
            },
            {
                path: '/official-animation',
                component: OfficialAnimation
            }
        ]
        const page = routeList.find(v=>v.path === pathname)
        //动画只能支持一个route
        return (
            <Framework>
                <QueueAnim delay={400} duration={800} type="scale" className="queue-simple">
                    <Route key={page.path} path={page.path} component={page.component}/>
                </QueueAnim>
            </Framework>
        );
    }
}

export default Dashboard