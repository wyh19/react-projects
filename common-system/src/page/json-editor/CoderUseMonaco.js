/**
 * Created by 30113 on 2018/4/24.
 */
import React from 'react'
import {Button, Switch, Tooltip} from 'antd'
import MonacoEditor from 'react-monaco-editor';
import {formatJson} from './common'

class CoderUseMonaco extends React.Component {
    constructor(props) {
        super(props)
        this.analysisJson = this.analysisJson.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.switchJson = this.switchJson.bind(this)
        this.state = {
            format: true,
            code: props.json ? formatJson(JSON.stringify(props.json)) : ''
        }
    }


    analysisJson() {
        let json = this.state.code ? JSON.parse(this.state.code) : null
        this.props.onAnalysis(json)
    }

    switchJson() {
        const formatState = !this.state.format
        let result
        if (formatState) {
            result = formatJson(this.state.code)
        } else {
            result = this.state.code.replace(/(\n+|\s+)/g, '')
        }
        this.setState({
            format: formatState,
            code: result
        })
    }

    handleChange(value) {
        this.setState({
            code: value
        })
    }

    componentWillReceiveProps(nextProps) {
        let code;
        if (this.state.format) {
            code = nextProps.json ? formatJson(JSON.stringify(nextProps.json)) : ''
        } else {
            code = nextProps.json ? JSON.stringify(nextProps.json) : ''
        }
        this.setState({
            code: code
        })
    }

    render() {
        const options = {
            selectOnLineNumbers: true,
            contextmenu: false,
            minimap: {enabled: false},
        };
        return (
            <div className="coder-area">
                <div className="toolbar">
                    <Tooltip title={this.state.format ? '压缩' : '对齐'}>
                        <Switch checked={this.state.format} onChange={this.switchJson} size="small"/>
                    </Tooltip>
                    <Tooltip title="解析">
                        <Button type="primary" size="small" shape="circle" icon="bulb" onClick={this.analysisJson}/>
                    </Tooltip>
                </div>
                <div className="coder">
                    <MonacoEditor
                        width="100%"
                        height="100%"
                        language="json"
                        theme="vs-dark"
                        value={this.state.code}
                        options={options}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        )
    }
}

export default  CoderUseMonaco