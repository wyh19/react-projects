/**
 * Created by 30113 on 2018/4/24.
 */
import React from 'react'
import {Button, Switch, Tooltip} from 'antd'
import MonacoEditor from 'react-monaco-editor';
import {formatJson} from './common'

class CoderUseMonaco extends React.Component{
    constructor(props) {
        super(props)
        this.demo = '{"a":{"a1":{},"a2":[]},"b":[{"b1":"b1"},{"b2":"b2"}],"c":"ccc"}'
        this.analysisJson = this.analysisJson.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.formatJson = this.formatJson.bind(this)
        this.state = {
            format: false,
            code: props.json ? JSON.stringify(props.json) : ''
        }
    }

    analysisJson() {
        let json = this.state.code ? JSON.parse(this.state.code) : null
        this.props.onAnalysis(json)
    }

    formatJson() {
        var result = formatJson(this.state.code)
        this.setState({
            code: result
        })
    }

    handleChange(value) {
        this.setState({
            code: value
        })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            code: nextProps.json ? JSON.stringify(nextProps.json) : ''
        })
    }
    render() {
        const options = {
            selectOnLineNumbers: true
        };
        return (

            <div>
                <div>
                    <span>格式化:</span><Switch defaultChecked={false} onChange={this.formatJson}/>
                    <Tooltip title="解析">
                        <Button type="primary" size="small" shape="circle" icon="bulb" onClick={this.analysisJson}/>
                    </Tooltip>
                </div>
                <MonacoEditor
                    width="100%"
                    height="500"
                    language="json"
                    theme="vs-dark"
                    value={this.state.code}
                    options={options}
                    onChange={this.handleChange}
                />
                <div>
                    <div>请复制下方json至文本框，然后点击解析按钮</div>
                    <div>{this.demo}</div>
                </div>
            </div>
        )
    }
}

export default  CoderUseMonaco