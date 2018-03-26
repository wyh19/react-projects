/**
 * Created by 30113 on 2018/3/22.
 */
import React from 'react'
import {Card, Col, Row, Icon} from 'antd'

import DemoTimeline from './demo-timeline'
import DemoCollapse from './demo-collapse'
import DemoCalendar from './demo-calendar'

import './bench.scss'

class Bench extends React.Component {

    render() {
        return (
            <div>
                <Row gutter={10}>
                    <Col span="8">
                        <Card title="时间轴" extra={<Icon type="sync"/>}>
                            <DemoTimeline/>
                        </Card>
                    </Col>
                    <Col span="8">
                        <Card title="折叠面板" extra={<Icon type="sync"/>}>
                            <DemoCollapse/>
                        </Card>
                    </Col>
                    <Col span="8">
                        <Card title="Card title" extra={<Icon type="sync"/>}>
                            <DemoCalendar/>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <Row gutter={10}>
                    <Col span="12">
                        <Card title="时间轴" extra={<Icon type="sync"/>}>
                            <DemoTimeline/>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card title="折叠面板" extra={<Icon type="sync"/>}>
                            <DemoCollapse/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Bench