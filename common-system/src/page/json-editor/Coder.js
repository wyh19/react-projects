/**
 * Created by 30113 on 2018/4/22.
 */
import React from 'react'
import {Button, Input} from 'antd'

class Coder extends React.Component {
    constructor(props) {
        super(props)
        this.demo='{"a":{"a1":{},"a2":[]},"b":[{"b1":"b1"},{"b2":"b2"}],"c":"ccc"}'
        this.analysisJson = this.analysisJson.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.formatJson =this.formatJson.bind(this)
    }

    analysisJson() {
        this.props.onAnalysis(JSON.parse(this.json))
    }
    formatJson () {
        var string = this.state.json
        var result = '',
            pos = 0,
            prevChar = '',
            outOfQuotes = true;
        for (var i = 0; i < string.length; i++) {
            var char = string.substring(i, i + 1);
            if (char == '"' && prevChar != '\\') {
                outOfQuotes = !outOfQuotes;
            } else if ((char == '}' || char == ']') && outOfQuotes) {
                result += "\n";
                pos--;
                for (var j = 0; j < pos; j++) result += '  ';
            }
            result += char;
            if ((char == ',' || char == '{' || char == '[') && outOfQuotes) {
                result += "\n";
                if (char == '{' || char == '[') pos++;
                for (var j = 0; j < pos; j++) result += '  ';
            }
            prevChar = char;
        }
        this.setState({
            json:result
        })
    }
    handleChange(e) {
            this.json= e.target.value
    }

    render() {
        return (
            <div>
                <div>
                    <Button onClick={this.formatJson}>格式化</Button>
                    <Button onClick={this.analysisJson}>解析</Button>
                </div>
                {/*value={ this.props.json ? JSON.stringify(this.props.json) : ''}*/}
                <textarea   style={{width:'100%',height:500,marginTop:10,fontSize:16}}  onChange={this.handleChange}>
                </textarea>
                <div>
                    <div>请复制下方json至文本框，然后点击解析按钮</div>
                    <div>{this.demo}</div>
                </div>
            </div>
        )
    }
}

export default Coder