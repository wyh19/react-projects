/**
 * Created by 30113 on 2018/4/20.
 */
import React from 'react'
import HTML5 from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';
import './json-editor.scss'
import ItemTypes from './ItemTypes'
import Box from './Box'
import Graph from './Graph'
import _ from 'lodash'
import {Modal, Input}from 'antd'

@DragDropContext(HTML5)
class JsonEditor extends React.Component {
    constructor(props) {
        super(props)
        this.onDropHandle = this.onDropHandle.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.pathArr = []
        this.box = null
        this.state = {
            showDialog: false,
            keyText: '',
            json: {}
        }
    }

    handleChange(e) {
        this.setState({
            keyText: e.target.value
        })
    }

    handleCancel() {
        this.setState({showDialog: false})
    }

    handleOk() {
        if (this.state.keyText) {
            this.setState({showDialog: false})
            //插入节点
            let quote = this.state.json
            _.forEach(this.pathArr, (item, k) => {
                quote = quote[item]
            })
            quote[this.state.keyText] = this.box.value
            this.setState({
                json: this.state.json
            })
            console.log(this.state.json)
        } else {
            alert('请输入key值')
        }
    }

    onDropHandle(box, target) {
        //计算当前的json,执行重绘
        this.box = box
        let path = target.props.path
        this.pathArr = []
        if (path) {
            this.pathArr = path.split('-')
        }
        if (target.props.type === ItemTypes.OBJECT) {
            this.setState({
                keyText: '',
                showDialog: true
            })
        } else {
            let quote = this.state.json
            _.forEach(this.pathArr, (item, k) => {
                quote = quote[item]
            })
            quote.push(this.box.value)
            this.setState({
                json: this.state.json
            })
        }
    }

    drawGraphArea(data, key, path) {
        let result;
        if (data) {
            const type = this.getType(data)
            switch (type) {
                case 'object':
                    result = (
                        <Graph key={key} path={path} type={ItemTypes.OBJECT} onDrop={this.onDropHandle}>
                            {
                                _.map(data, (item, i) => {
                                    let newPath = path ? `${path}-${i}` : i
                                    return this.drawGraphArea(item, i, newPath)
                                })
                            }
                        </Graph>
                    )
                    break;
                case 'array':
                    result = (
                        <Graph key={key} path={path} type={ItemTypes.ARRAY} onDrop={this.onDropHandle}>
                            {
                                _.map(data, (item, i) => {
                                    let newPath = path ? `${path}-${i}` : i
                                    return this.drawGraphArea(item, i, newPath)
                                })
                            }
                        </Graph>
                    )
                    break;
                case 'string':
                    result = (
                        <div key={key}>
                            {data}
                        </div>
                    )
                default:
                    break;
            }
        }
        return result
    }

    getType(data) {
        let type = typeof(data)
        if (type === 'object' && data instanceof Array) {
            type = 'array'
        }
        return type
    }

    render() {
        return (
            <div>
                <div>
                    {/*拖拽区*/}
                    <div>
                        <Box type={ItemTypes.OBJECT} name="对象" value={{}}/>
                        <Box type={ItemTypes.ARRAY} name="数组" value={[]}/>
                        <Box type={ItemTypes.VALUE} name="值"/>
                    </div>
                    <div style={{height: 500}}>
                        <Graph type={ItemTypes.ROOT} onDrop={this.onDropHandle} value={this.state.json}>
                            {
                                this.drawGraphArea(this.state.json, 'wyh-json-editor')
                            }
                        </Graph>
                    </div>
                </div>
                <div>
                    {/*编译区*/}

                </div>
                <Modal visible={this.state.showDialog}
                       title="输入对象的key值"
                       onOk={this.handleOk}
                       onCancel={this.handleCancel}
                >
                    <Input value={this.state.keyText} onChange={this.handleChange}/>
                </Modal>
            </div>
        )
    }

}

export default JsonEditor