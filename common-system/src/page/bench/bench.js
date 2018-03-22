/**
 * Created by 30113 on 2018/3/22.
 */
import React from 'react'
import {Card, Col, Row, Icon} from 'antd'

class Bench extends React.Component {

    render() {
        return (
            <div>
                <Row gutter={10}>
                    <Col span="8">
                        <Card>
                           <div> Card content</div>
                            <div> Card content</div>
                        </Card>
                    </Col>
                    <Col span="8">
                        <Card title="Card title" extra={<Icon type="sync"/>}>Card content</Card>
                    </Col>
                    <Col span="8">
                        <Card title="Card title" extra={<Icon type="sync"/>}>Card content</Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Bench