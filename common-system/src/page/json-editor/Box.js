/**
 * Created by 30113 on 2018/4/20.
 */
import React from 'react'
import { DragSource } from 'react-dnd'
import ItemTypes from './ItemTypes'

const style = {
    display: 'inline-block',
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    backgroundColor: 'white',
    cursor: 'move',
    margin:'5px'
}

const boxSource = {
    beginDrag(props) {
        return {
            type:props.type,
            value:props.value,
        }
    }
}

@DragSource(ItemTypes.BOX,boxSource,connect=>({
    connectDragSource: connect.dragSource(),
}))
class Box extends React.Component{
    render(){
        const { connectDragSource,name } = this.props
        return connectDragSource(
            <div style={style}>
                {name}
            </div>
        )
    }
}
export default Box