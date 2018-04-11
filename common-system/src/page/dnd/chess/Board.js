/**
 * Created by 30113 on 2018/4/10.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BoardSquare from './BoardSquare'
import Knight from './Knight'
import './Board.css'
import DnDContext from '../DnDContext'

@DnDContext
export default class Board extends Component {
    static propTypes = {
        knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    }

    renderSquare(i) {
        const x = i % 8
        const y = Math.floor(i / 8)

        return (
            <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
                <BoardSquare x={x} y={y}>
                    {this.renderPiece(x, y)}
                </BoardSquare>
            </div>
        )
    }

    renderPiece(x, y) {
        const [knightX, knightY] = this.props.knightPosition
        const isKnightHere = x === knightX && y === knightY
        return isKnightHere ? <Knight /> : null
    }

    render() {
        const squares = []
        for (let i = 0; i < 64; i += 1) {
            squares.push(this.renderSquare(i))
        }

        return <div className="Board">{squares}</div>
    }
}