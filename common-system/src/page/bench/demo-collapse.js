/**
 * Created by 30113 on 2018/3/26.
 */
import React from 'react'
import {Collapse} from 'antd'
const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function callback(key) {
    console.log(key);
}


class DemoCollapse extends React.Component{

    render(){
        return(
            <Collapse bordered={false} onChange={callback} defaultActiveKey="2" accordion>
                <Panel header={'This is panel header 1'} key="1">
                    <Collapse defaultActiveKey="1">
                        <Panel header={'This is panel nest panel'} key="1">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Panel>
                <Panel header={'This is panel header 2'} key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header={'This is panel header 3'} key="3">
                    <p>{text}</p>
                </Panel>
            </Collapse>
        )
    }
}

export default DemoCollapse
