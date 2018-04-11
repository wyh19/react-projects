/**
 * Created by 30113 on 2018/4/11.
 */
import React from 'react'
import {Card,Row,Col } from 'antd'

import SingleTarget from './SingleTarget/Container'


class DusbinDemos extends React.Component{

    render(){
        return(
            <div>
                <Row gutter={10}>
                    <Col span="8">
                        <Card title="SingleTarget">
                            <SingleTarget />
                        </Card>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default DusbinDemos