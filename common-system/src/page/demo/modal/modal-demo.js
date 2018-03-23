/**
 * Created by 30113 on 2018/3/22.
 */
import React from 'react'
import DemoBase from './demo-base'
import DemoAsync from './demo-async'

class ModalDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible1: false,
            visible2: false,
            confirmLoading:false
        }
    }

    showModal1 = () => {
        this.setState({visible1: true})
    }
    showModal2 = () => {
        this.setState({visible: true})
    }
    handleOk=(e)=>{
        console.log(e)
        this.setState({visible1: false})
    }
    handleCancel=(e)=>{
        console.log(e)
        this.setState({visible1: false})
    }
    render() {
        return (
            <div>
                <DemoBase />
                <br/>
                <DemoAsync/>
            </div>
        )
    }
}

export default  ModalDemo