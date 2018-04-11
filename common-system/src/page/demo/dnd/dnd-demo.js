/**
 * Created by 30113 on 2018/4/10.
 */
import React from 'react'

import Board from './Board'

class DnD extends React.Component{

    render(){
        return (
            <Board knightPosition={[7, 4]}/>
        )
    }
}
export default DnD