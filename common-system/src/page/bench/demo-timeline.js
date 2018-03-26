/**
 * Created by 30113 on 2018/3/26.
 */
import React from 'react'
import {Timeline,Icon,message} from 'antd'

class DemoTimeline extends React.Component {

    render() {
        return (
            <Timeline pending={<a onClick={()=>{message.info('加载更多')}}>See more</a>}>
                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="red"  dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} >
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
            </Timeline>
        )
    }
}
export default DemoTimeline