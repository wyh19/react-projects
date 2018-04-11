/**
 * Created by 30113 on 2018/4/11.
 */
import React, { Component } from 'react'
// import { DragDropContextProvider } from 'react-dnd'
// import HTML5Backend from 'react-dnd-html5-backend'
import Dustbin from './Dustbin'
import Box from './Box'


import DnDContext from '../../DnDContext'

@DnDContext
export default class Container extends Component {
    render() {
        return (
                <div>
                    <div style={{ overflow: 'hidden', clear: 'both' }}>
                        <Dustbin />
                    </div>
                    <div style={{ overflow: 'hidden', clear: 'both' }}>
                        <Box name="Glass" />
                        <Box name="Banana" />
                        <Box name="Paper" />
                    </div>
                </div>
        )
    }
}