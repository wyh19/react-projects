/**
 * Created by 30113 on 2018/4/11.
 */
import React from 'react'
import {Card,Row,Col } from 'antd'

import SingleTarget from './SingleTarget'
import CopyOrMove from './CopyOrMove'
import MultipleTargets from './MultipleTargets'
import SingleTargetInFrame from './SingleTargetInFrame'
import DustbinStressTest from './Stress Test'

class DusbinDemos extends React.Component{

    render(){
        return(
            <div>
                <Row gutter={10}>
                    <Col span="10">
                        <Card title="CopyOrMove">
                            <CopyOrMove />
                        </Card>
                    </Col>
                    <Col span="14">
                        <Card title="MultipleTargets">
                            <MultipleTargets />
                        </Card>
                    </Col>
                    <Col span="8">
                        <Card title="SingleTarget">
                            <SingleTarget />
                        </Card>
                    </Col>
                    <Col span="8">
                        <Card title="SingleTargetInFrame">
                            <SingleTargetInFrame />
                        </Card>
                    </Col>
                    <Col span="8">
                        <Card title="DustbinStressTest">
                            {/*<DustbinStressTest />*/}
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DusbinDemos