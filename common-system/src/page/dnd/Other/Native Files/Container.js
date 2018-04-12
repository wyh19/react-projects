import React, {Component} from 'react'
import {DragDropContextProvider} from 'react-dnd'
import  {NativeTypes} from 'react-dnd-html5-backend'
import TargetBox from './TargetBox'
import FileList from './FileList'

import DnDContext from '../../DnDContext'

@DnDContext
export default class Container extends Component {
    constructor(props) {
        super(props)

        this.handleFileDrop = this.handleFileDrop.bind(this)

        this.state = {droppedFiles: []}
    }

    handleFileDrop(item, monitor) {
        if (monitor) {
            const droppedFiles = monitor.getItem().files
            this.setState({droppedFiles})
        }
    }

    render() {
        const {FILE} = NativeTypes
        const {droppedFiles} = this.state

        return (
            <div>
                <TargetBox accepts={[FILE]} onDrop={this.handleFileDrop}/>
                <FileList files={droppedFiles}/>
            </div>
        )
    }
}
