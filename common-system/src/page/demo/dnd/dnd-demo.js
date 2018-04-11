/**
 * Created by 30113 on 2018/4/10.
 */
import React from 'react'
import { observe } from './Game'
import Board from './Board'

class DnD extends React.Component{
    constructor(props) {
        super(props)
        this.unobserve = observe(this.handleChange.bind(this))
    }

    handleChange(knightPosition) {
        const nextState = { knightPosition }
        if (this.state) {
            this.setState(nextState)
        } else {
            this.state = nextState
        }
    }

    componentWillUnmount() {
        this.unobserve()
    }
    render(){
        const { knightPosition } = this.state
        return (
            <Board knightPosition={knightPosition} />
        )
    }
}
export default DnD