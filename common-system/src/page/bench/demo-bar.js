/**
 * Created by 30113 on 2018/3/26.
 */
import React from 'react'
import ReactEcharts  from 'echarts-for-react'

class DemoBar extends React.Component {
    componentDidMount(){
        let echarts_instance = this.echarts_react.getEchartsInstance();
        setTimeout(()=>{
            echarts_instance.resize()
        },0)
    }
    render() {
        const option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        }
        return (
            <ReactEcharts
                ref={(e) => { this.echarts_react = e; }}
                option={option}
                style={{width:'100%',height:'100%'}}
                opts={{renderer: 'svg'}}
            />
        )
    }
}

export default DemoBar