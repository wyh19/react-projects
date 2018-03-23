/**
 * Created by 30113 on 2018/3/22.
 */
import React from 'react'
import DemoBase from './demo-base'
import DemoAsync from './demo-async'
import DemoFooter from './demo-footer'
import DemoConfirm from './demo-confirm'
import DemoTypes from './demo-types'

class ModalDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible1: false,
            visible2: false,
            confirmLoading:false
        }
    }

    render() {
        return (
            <div>
                <DemoBase />
                <br/>
                <DemoAsync/>
                <br/>
                <DemoFooter/>
                <br/>
                <DemoConfirm/>
                <br/>
                <DemoTypes/>
            </div>
        )
    }
}

export default  ModalDemo