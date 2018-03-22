/**
 * Created by 30113 on 2018/3/22.
 */
import React from 'react'
import Framework from './frame'
import {Switch,Route} from 'react-router-dom'

import './dashbord.scss'

import Bench from '../bench/bench'

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
                <Switch>
                    <Route path="/bench" component={Bench}/>
                    <Route  component={Bench}/>
                </Switch>
            </Framework>
        );
    }
}

export default Dashboard