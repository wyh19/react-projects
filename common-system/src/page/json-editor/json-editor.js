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
import {Modal, Input, message}from 'antd'
import CoderArea from './CoderUseMonaco'

@DragDropContext(HTML5)
class JsonEditor extends React.Component {
    constructor(props) {
        super(props)
        this.onDropHandle = this.onDropHandle.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.onAnalysis = this.onAnalysis.bind(this)
        this.pathArr = []
        this.box = null
        this.state = {
            showDialog: false,
            keyText: '',
            json: null
        }
    }

    onAnalysis(json) {
        this.setState({
            json: json
        })
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
            this.updateJson(ItemTypes.OBJECT, this.state.keyText)
        } else {
            message.info('请输入key值')
        }
    }

    onDropHandle(box, target) {
        this.box = box
        let path = target.props.path
        this.pathArr = []
        if (path) {
            this.pathArr = path.split('-')
        }
        switch (target.props.type) {
            case ItemTypes.ROOT:
                if (this.box.type === ItemTypes.OBJECT) {
                    this.setState({
                        json: {}
                    })
                } else if (this.box.type === ItemTypes.ARRAY) {
                    this.setState({
                        json: []
                    })
                } else {
                    message.error('根节点只能是{}或者[]')
                    return
                }
                break;
            case ItemTypes.OBJECT:
                this.setState({
                    keyText: '',
                    showDialog: true
                })
                const input = this.refs.keyInput;
                input.focus();
                break;
            case ItemTypes.ARRAY:
                this.updateJson(ItemTypes.ARRAY)
                break;
        }
    }

    updateJson(type, key) {
        let quote = this.state.json
        _.forEach(this.pathArr, (item, k) => {
            quote = quote[item]
        })
        if (type === ItemTypes.ARRAY) {
            quote.push(this.box.value)
        } else {
            quote[key] = this.box.value
        }
        this.setState({
            json: this.state.json
        })
    }

    drawGraphArea(data, key, path) {
        let result;
        if (data) {
            const type = this.getType(data)
            switch (type) {
                case 'object':
                    result = (
                        <Graph key={key} tag={key} path={path} type={ItemTypes.OBJECT} onDrop={this.onDropHandle}>
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
                        <Graph key={key} tag={key} path={path} type={ItemTypes.ARRAY} onDrop={this.onDropHandle}>
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
            <div className="json-editor">
                <div className="drag-area">
                    <div className="box-area">
                        <div className="area-title">元素组件</div>
                        <Box type={ItemTypes.OBJECT} name="对象" value={{}}/>
                        <Box type={ItemTypes.ARRAY} name="数组" value={[]}/>
                        <Box type={ItemTypes.VALUE} name="值"/>
                    </div>
                    <div className="graph-area">
                        <div className="area-title">JSON绘制区</div>
                        <Graph className="root-graph"
                               type={ItemTypes.ROOT}
                               onDrop={this.onDropHandle}
                               value={this.state.json}>
                            {
                                this.drawGraphArea(this.state.json)
                            }
                        </Graph>
                    </div>
                </div>
                <div className="compile-area">
                    <div className="area-title">JSON文本</div>
                    <CoderArea json={this.state.json} onAnalysis={this.onAnalysis}/>
                </div>

                <Modal visible={this.state.showDialog}
                       title="输入元素的key值"
                       maskClosable={false}
                       okText="确认"
                       cancelText="取消"
                       onOk={this.handleOk}
                       onCancel={this.handleCancel}
                >
                    <Input value={this.state.keyText} onChange={this.handleChange} ref="keyInput"/>
                </Modal>
            </div>
        )
    }
}

export default JsonEditor