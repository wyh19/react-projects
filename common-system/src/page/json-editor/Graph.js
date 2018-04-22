/**
 * Created by 30113 on 2018/4/20.
 */
import React from 'react'
import {DropTarget} from 'react-dnd'
import ItemTypes from './ItemTypes'

function getStyle(borderColor,type) {
    let style = {
        minHeight: '40px',
        color: '#000',
        padding:'20px',
        margin:'10px 0 10px 0',
        border: '1px solid',
        borderColor,
        boxSizing:'border-box',
    }
    switch(type){
        case ItemTypes.ROOT:
            style.height = '100%'
            style.borderWidth='2px'
            style.margin = '0'
            style.overflowY='auto'
            break;
        case ItemTypes.OBJECT:
            style.borderRadius = '10px'
            break;
        case ItemTypes.ARRAY:
            break;
        default:
            break;
    }
    return style
}
const boxTarget = {
    drop(events, monitor, component) {
        const hasDroppedOnChild = monitor.didDrop()
        if (hasDroppedOnChild) {
            return
        }
        if(component.props.type===ItemTypes.ROOT&& component.props.children){
            //根节点只装载一个元素，即真正的json
            return
        }
        events.onDrop(monitor.getItem(), component)
    },
}

@DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOverCurrent: monitor.isOver({shallow: true}),
}))
class Graph extends React.Component {
    render() {
        const {
            isOverCurrent,
            connectDropTarget,
            children,
            type
        } = this.props

        let borderColor = '#ccc'
        if (isOverCurrent && (type !==ItemTypes.ROOT || (type ===ItemTypes.ROOT && !children))) {
            borderColor = '#2ec7c9'
        }
        return connectDropTarget(
            <div style={getStyle(borderColor, type)}>
                {children}
            </div>
        )
    }
}

export default Graph
