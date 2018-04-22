/**
 * Created by 30113 on 2018/3/22.
 */
import React from 'react'
import Framework from './frame'
import {Switch,Route} from 'react-router-dom'

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
import JsonEditor from '../json-editor/json-editor'

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
                    <Route path="/jsoneditor" component={JsonEditor}/>
                    <Route path="/table" component={TableDemo}/>
                    <Route path="/tree" component={TreeDemo}/>
                    <Route path="/modal" component={ModalDemo}/>
                    <Route path="/chess" component={Chess}/>
                    <Route path="/dustbin" component={DusbinDemos}/>
                    <Route path="/dragaround" component={DragAround} />
                    <Route path="/nesting" component={Nesting} />
                    <Route path="/about" component={About}/>
                    <Route path="/sortable" component ={Sortable}/>
                    <Route path="/customize" component ={Customize}/>
                    <Route path="/other" component ={Other}/>
                    <Route path="/official-animation" component ={OfficialAnimation}/>
                    <Route  component={Bench}/>
                </Switch>
            </Framework>
        );
    }
}

export default Dashboard