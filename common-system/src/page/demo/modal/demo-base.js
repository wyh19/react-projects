/**
 * Created by 30113 on 2018/3/22.
 */
import React from 'react'
import {Button, Modal}from 'antd'


class DemoBase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    showModal = () => {
        this.setState({visible: true})
    }
    handleOk=(e)=>{
        console.log(e)
        this.setState({visible: false})
    }
    handleCancel=(e)=>{
        console.log(e)
        this.setState({visible: false})
    }
    render() {
        return (
            <div>
                <Button type="primary"
                        onClick={this.showModal}
                >普通对话框</Button>
                <Modal visible={this.state.visible}
                       title="普通对话框"
                       onOk={this.handleOk}
                       onCancel={this.handleCancel}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
            </div>
        )
    }
}

export default  DemoBase