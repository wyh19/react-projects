/**
 * Created by 30113 on 2018/3/22.
 */
import React from 'react'
import {Button, Modal}from 'antd'


class DemoAsync extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            confirmLoading:false
        }
    }

    showModal = () => {
        this.setState({visible: true})
    }
    handleOk=(e)=>{
        console.log(e)
        this.setState({confirmLoading: true})
        setTimeout(()=>{
            this.setState({
                visible:false,
                confirmLoading:false
            })
        },2000)
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
                >异步关闭</Button>
                <Modal visible={this.state.visible}
                       title="异步关闭对话框"
                       onOk={this.handleOk}
                       onCancel={this.handleCancel}
                       confirmLoading={this.state.confirmLoading}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
            </div>
        )
    }
}

export default  DemoAsync