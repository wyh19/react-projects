/**
 * Created by 30113 on 2018/3/26.
 */
import React from 'react'
import ReactEcharts  from 'echarts-for-react'

class DemoPie extends React.Component {
    componentDidMount(){
        let echarts_instance = this.echarts_react.getEchartsInstance();
        setTimeout(()=>{
            echarts_instance.resize()
        },0)
    }
    render() {
        const option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                }
            ]
        }
        return (
            <ReactEcharts
                ref={(e) => { this.echarts_react = e; }}
                option={option}
                style={{width:'100%',height:'100%'}}
                // opts={{renderer: 'svg'}}
            />
        )
    }
}

export default DemoPie