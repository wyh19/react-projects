/**
 * Created by 30113 on 2018/4/12.
 */
import React from 'react'
import {Card,Row,Col } from 'antd'
import CustomizeDropEffects from './Drop Effects'
import CustomizeHandlesAndPreviews from './Handles and Previews'

class Nesting extends React.Component{

    render(){
        return(
            <div>
                <Row gutter={10}>
                    <Col span="12">
                        <Card title="CustomizeDropEffects">
                            <CustomizeDropEffects />
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card title="CustomizeHandlesAndPreviews">
                            <CustomizeHandlesAndPreviews />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Nesting