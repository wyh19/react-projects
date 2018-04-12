/**
 * Created by 30113 on 2018/4/11.
 */
import React from 'react'
import {Card,Row,Col } from 'antd'

import SingleTarget from './SingleTarget/Container'
import CopyOrMove from './CopyOrMove/Container'

class DusbinDemos extends React.Component{

    render(){
        return(
            <div>
                <Row gutter={10}>
                    <Col span="6">
                        <Card title="SingleTarget">
                            <SingleTarget />
                        </Card>
                    </Col>
                    <Col span="10">
                        <Card title="SingleTarget">
                            <CopyOrMove />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DusbinDemos