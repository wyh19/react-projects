/**
 * Created by 30113 on 2018/3/22.
 */
import React from 'react'
import Framework from './frame'

import './dashbord.scss'

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
        return (
            <Framework>

            </Framework>
        );
    }
}

export default Dashboard