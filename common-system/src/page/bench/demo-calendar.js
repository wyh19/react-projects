/**
 * Created by 30113 on 2018/3/26.
 */
import React from 'react'
import {Calendar} from 'antd'

function onPanelChange(value, mode) {
    console.log(value, mode);
}
function onSelect(value){
    console.log(value);
}

class DemoCalendar extends React.Component{

    render(){
        return(
            <Calendar fullscreen={false}  onPanelChange={onPanelChange} onSelect={onSelect} />
        )
    }
}
export default DemoCalendar