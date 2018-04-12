/**
 * Created by 30113 on 2018/4/12.
 */
import React from 'react'
import {Card,Row,Col } from 'antd'
import SortableCancelOnDropOutside from './Cancel on Drop Outside'
import SortableSimple from './Simple'
import SortableStressTest from './Stress Test'

class Nesting extends React.Component{

    render(){
        return(
            <div>
                <Row gutter={10}>
                    <Col span="8">
                        <Card title="SortableCancelOnDropOutside">
                            <SortableCancelOnDropOutside />
                        </Card>
                    </Col>
                    <Col span="8">
                        <Card title="SortableSimple">
                            <SortableSimple />
                        </Card>
                    </Col>
                    <Col span="8">
                        <Card title="SortableStressTest">
                            <SortableStressTest />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Nesting