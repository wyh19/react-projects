/**
 * Created by 30113 on 2018/3/22.
 */
import React from 'react'
import {Button, Modal}from 'antd'

class DemoFooter extends React.Component {
    state = {
        loading: false,
        visible: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open modal dialog
                </Button>
                <Modal
                    visible={this.state.visible}
                    title="Title"
                    footer={null}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    // footer={[
                    //     <Button key="back" size="large" onClick={this.handleCancel}>Return</Button>,
                    //     <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>
                    //         Submit
                    //     </Button>,
                    // ]}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

export default DemoFooter