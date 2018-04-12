/**
 * Created by 30113 on 2018/4/12.
 */
import React from 'react'
import {Card,Row,Col } from 'antd'
import NativeFiles from './Native Files'

class Other extends React.Component{

    render(){
        return(
            <div>
                <Row gutter={10}>
                    <Col span="12">
                        <Card title="NativeFiles">
                            <NativeFiles />
                        </Card>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default Other