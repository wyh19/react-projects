/**
 * Created by 30113 on 2018/4/12.
 */
import React from 'react'
import {Card,Row,Col } from 'antd'
import DragNesting from './Drag Sources'
import DropNesting from './Drop Targets'

class Nesting extends React.Component{

    render(){
        return(
            <div>
                <Row gutter={10}>
                    <Col span="12">
                        <Card title="DragNesting">
                            <DragNesting />
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card title="DropNesting">
                            <DropNesting />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Nesting