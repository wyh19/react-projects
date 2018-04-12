/**
 * Created by 30113 on 2018/4/12.
 */
import React from 'react'
import {Card,Row,Col } from 'antd'
import Naive from './Naive'
import DragAroundCustomDragLayer from './Custom Drag Layer'

class DragAround extends React.Component{

    render(){
        return(
            <div>
                <Row gutter={10}>
                    <Col span="12">
                        <Card title="Naive">
                            <Naive />
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card title="DragAroundCustomDragLayer">
                            <DragAroundCustomDragLayer/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DragAround