/**
 * Created by 30113 on 2018/4/12.
 */
import React, {Component} from 'react'
import Dustbin from './Dustbin'
import Box from './Box'
import DnDContext from '../../DnDContext'

@DnDContext
export default class Container extends Component {
    render() {
        return (
            <div>
                <div style={{overflow: 'hidden', clear: 'both'}}>
                    <Dustbin allowedDropEffect="any"/>
                    <Dustbin allowedDropEffect="copy"/>
                    <Dustbin allowedDropEffect="move"/>
                </div>
                <div style={{overflow: 'hidden', clear: 'both'}}>
                    <Box name="Glass"/>
                    <Box name="Banana"/>
                    <Box name="Paper"/>
                </div>
            </div>
        )
    }
}